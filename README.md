Comencé creando un proyecto en React utilizando create-react-app. Después, instalé las dependencias necesarias para el manejo de estado y la persistencia de datos en el navegador, como el hook personalizado useLocalStorage. Configuré la estructura básica del proyecto, creando los componentes necesarios como App.js, TaskContext.js y Tareas.js. Para la parte de la interfaz, apliqué estilos usando CSS, dándole un diseño atractivo y responsivo.
Utilicé el hook useState para manejar el estado de las tareas dentro de un contexto global (TaskContext). Creé el contexto con createContext y utilicé useContext en el componente Tareas para acceder al estado. Para persistir las tareas en el almacenamiento local del navegador, utilicé el hook useEffect que se encarga de sincronizar el estado de las tareas con localStorage cada vez que el estado cambia.
En lugar de usar solo useState, implementé useReducer para manejar las acciones más complejas de las tareas, como agregar, eliminar y actualizar elementos. Esto me permitió estructurar las acciones de manera más eficiente y seguir las buenas prácticas al manejar un estado más complejo, como el de una lista de tareas. Utilicé el dispatch para actualizar el estado según la acción realizada.
Trabajé en la interfaz para que fuera visualmente atractiva y fácil de usar. Utilicé colores cálidos y un diseño limpio con bordes redondeados y efectos de hover. Implementé la funcionalidad de agregar y eliminar tareas con botones, y se mostró la lista de tareas de manera dinámica. También, aseguré que la interfaz fuera responsiva para que se viera bien en dispositivos móviles y de escritorio
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
