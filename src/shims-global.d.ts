// required to let Wepack handling the imported pictures
declare module '*.png' {
  const content: any;
  export default content;
}

declare module '*.jpg' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}

declare module 'quagga';
