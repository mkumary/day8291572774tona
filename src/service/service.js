//const BASE_URL = 'https://daytonasystems.in/interview-api/';
const BASE_URL = '/';
const IMAGELIST = `${BASE_URL}list.php`;
const IMAGEDETAIL = `${BASE_URL}image.php`;

export const getImageList = () => fetch(IMAGELIST).then(res => res.json());
export const getImageDetails = (id) => fetch(`${IMAGEDETAIL}?id=${id}`).then(res => res.json());