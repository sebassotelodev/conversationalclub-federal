import React, { useEffect, useState, useRef } from "react";
import ContextPrincipal from "./contextPrincipal";
import firebaseApp from "./firebase";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
} from "firebase/storage";

import { push } from "next/router";
function Context(props) {
  const [loader, setLoader] = useState(null);

  const [estadoUsuario, setEstadoUsuario] = useState(0);
  // 0 = No logueado
  // 1 = Logueado
  const [user, setUser] = useState("");
  let user1 = "";

  // 0 = No permisos
  // 1 = UE
  // 2 = Admin Medio
  // 3 = Admin Gral
  const [permisos, setPermisos] = useState(0);

  const auth = getAuth(firebaseApp);
  const firestore = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);

  const [cursos, setCursos] = useState([]);
  const [alumnos, setAlumnos] = useState(null);
  const [capacitadores, setCapacitadores] = useState([]);

  const [renovacion, setRenovacion] = useState({});

  const [tipoCursos, setTipoCursos] = useState([]);

  const [UE, setUE] = useState([]);

  const verificarLogin = () => {
    onAuthStateChanged(auth, inspectorSesion);
  };

  const inspectorSesion = (usuarioFirebase) => {
    //en caso de que haya seison iniciada
    if (usuarioFirebase) {
      setUser(usuarioFirebase);
      user1 = usuarioFirebase;

      //Aca se manejan el nivel de permiso con la sesion iniciada
      darRol(usuarioFirebase);

      // buscarOCrearUsuarioCliente();
    } else {
      //en caso de que haya seison iniciada
      setUser(null);
      setEstadoUsuario(0);
      push("/");
    }
  };

  const darRol = async (user) => {
    if (!user || !user.uid) return;

    const uid = user.uid;
    const roles = [
      { name: "AdminGen", nivel: 3 },
      { name: "AdminMed", nivel: 2 },
      { name: "AdminUE", nivel: 1 },
    ];

    try {
      for (const role of roles) {
        const docRef = doc(firestore, "Roles", role.name);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.usuarios?.includes(uid)) {
            setPermisos(role.nivel);
            return;
          }
        }
      }

      setPermisos(0); // O "sin permisos" si querés indicar que no tiene ninguno
    } catch (error) {
      console.error("Error al obtener el rol del usuario:", error);
      setPermisos(0); // Manejo en caso de error
    }
  };

  const tipoDeCurso = [
    { tipo: "Actualizacion Cargas Generales", codigo: "121" },
    { tipo: "Programa de Induccion Cargas Generales", codigo: "120" },
    { tipo: "Actualizacion Mercancias Peligrosas", codigo: "5" },
    { tipo: "Programa de Induccion Mercancias Peligrosas", codigo: "4" },
  ];

  const obtenerLimiteMaximoPorTipo = (tipoCurso) => {
    return limitesMaximosPorTipo[tipoCurso] || 0; // 0 es el valor predeterminado si el tipo de curso no está definido
  };

  // Mapeo directo entre tipo de curso y límite máximo de alumnos
  const limitesMaximosPorTipo = {
    121: 23,
    120: 13,
    4: 33,
    5: 33,
  };

  const fetchUnidadesEvaluadoras = async () => {
    const ref = collection(firestore, "UnidadEvaluadora");
    const snapshot = await getDocs(ref);

    const unidades = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setUE(unidades);

    console.log("UEs", unidades);
  };

  const fetchAlumnos = async () => {
    setLoader(true);
    const coleccionRef = collection(firestore, "alumnos");
    const snapshot = await getDocs(coleccionRef);

    let todosLosAlumnos = [];

    snapshot.forEach((doc) => {
      const data = doc.data(); // Obtenemos el contenido del documento (es un objeto con muchos alumnos)

      const ids = Object.keys(data); // Extraemos los IDs de cada alumno

      // Por cada ID, agregamos al alumno al array con su ID incluido
      ids.forEach((id) => {
        const alumno = data[id];
        if (alumno) {
          todosLosAlumnos.push({ id, ...alumno });
        }
      });
    });

    setAlumnos(todosLosAlumnos); // Guardamos todos los alumnos en el estado
    setLoader(false);
  };

  const fetchCapacitadores = async () => {
    setLoader(true);
    const coleccionRef = collection(firestore, "Capacitadores");
    const snapshot = await getDocs(coleccionRef);
    const todosLosCapacitadores = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(todosLosCapacitadores);
    setCapacitadores(todosLosCapacitadores);
    setLoader(false);
  };

  const fetchTipoCursos = async () => {
    try {
      setLoader(true);
      const docRef = doc(firestore, "TipoCursos", "tipos");
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const data = snapshot.data(); // objeto: { "Curso A": {...}, "Curso B": {...} }
        const tiposArray = Object.entries(data)
          .map(([id, valores]) => ({
            ...valores,
          }))
          .sort((a, b) => a.nombre.localeCompare(b.nombre));

        setTipoCursos(tiposArray);
        // ahora es un array
      } else {
        console.warn("No se encontró el documento 'tipos'");
        setTipoCursos([]);
      }
    } catch (error) {
      console.error("Error al obtener tipos de curso:", error);
      setTipoCursos([]);
    } finally {
      setLoader(false);
    }
  };

  const fetchRenovacion = async () => {
    try {
      setLoader(true);
      const docRef = doc(firestore, "TipoCursos", "renovacion");
      const snapshot = await getDoc(docRef);

      if (snapshot.exists()) {
        const data = snapshot.data(); // objeto: { "Curso A": {...}, "Curso B": {...} }
        console.log("RENOVACOIN", data);
        setRenovacion(data);
      } else {
        console.warn("No se encontró el documento 'renovacion'");
        setRenovacion({});
      }
    } catch (error) {
      console.error("Error:", error);
      setRenovacion({});
    } finally {
      setLoader(false);
    }
  };

  const [opciones, setOpciones] = useState({
    unidadesEvaluadoras: [],
    tiposCurso: [],
    capacitadores: [],
  });

  const fetchCursos = async () => {
    setLoader(true);
    const coleccionRef = collection(firestore, "Cursos");
    const snapshot = await getDocs(coleccionRef);

    let todosLosCursos = [];

    snapshot.forEach((doc) => {
      const data = doc.data();
      const ids = Object.keys(data);
      ids.forEach((id) => {
        const curso = data[id];
        if (curso) {
          todosLosCursos.push({ id, ...curso });
        }
      });
    });

    setCursos(todosLosCursos);
    setLoader(false);

    // Sacar valores únicos para los filtros
    const unidades = [
      ...new Set(todosLosCursos.map((c) => c.unidadEvaluadora).filter(Boolean)),
    ];
    const tipos = [
      ...new Set(todosLosCursos.map((c) => c.tipoCurso).filter(Boolean)),
    ];
    const capacitadores = [
      ...new Set(
        todosLosCursos.flatMap((c) =>
          (c.dias || []).map((dia) => dia.capacitador).filter(Boolean)
        )
      ),
    ];
    setOpciones({
      unidadesEvaluadoras: unidades,
      tiposCurso: tipos,
      capacitadores: capacitadores,
    });
  };

  useEffect(() => {
    verificarLogin();
  }, []);

  return (
    <ContextPrincipal.Provider value={{}}>
      {props.children}
    </ContextPrincipal.Provider>
  );
}

export default Context;
