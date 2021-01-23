import Global from "./Global";
const BASE_URL = Global.urlApi;

async function callApi(endpoint, options = {}) {

    options.headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    };

    const url = BASE_URL + endpoint;
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}

const ApiHttp = {
    noticia: {
        allshow() {
            return callApi(`/noticias`);
        },

        getByTipo(tipo) {
            return callApi(`/noticia-tipo/${tipo}`);
        },

        findNoticia(idnoticia) {
            return callApi(`/noticia-id/${idnoticia}`);
        },
    },
    docente: {
        allshow() {
            return callApi(`/docentes`);
        },

        findDocente(iddocente) {
            return callApi(`/docente-id/${iddocente}`);
        },
    },
    video: {
        allshow() {
            return callApi(`/videos`);
        },
    },
};

export default ApiHttp;