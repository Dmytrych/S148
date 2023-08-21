
const resolvedSettings = {
    REACT_APP_IMAGES_HOST_URL: process.env.REACT_APP_IMAGES_HOST_URL,
    REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
}

export const appSettings = {
    imagesHost: resolvedSettings.REACT_APP_IMAGES_HOST_URL,
    backendUrl: resolvedSettings.REACT_APP_BACKEND_URL,
};
