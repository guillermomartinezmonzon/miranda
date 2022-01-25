
{
  "name": "miranda-admin",
  "version": "0.1.0",
  "private": true,
  "homepage": "https://guillermomartinezmonzon.github.io/miranda/",
  "dependencies": {
    "@fortawesome/free-solid-svg-icons": "^5.15.4",
    "@fullcalendar/daygrid": "^5.10.1",
    "@fullcalendar/interaction": "^5.10.1",
    "@fullcalendar/react": "^5.10.1",
    "@googlemaps/markerclusterer": "^1.0.18",
    "@googlemaps/react-wrapper": "^1.1.18",
    "@googlemaps/typescript-guards": "^1.0.4",
    "@reduxjs/toolkit": "^1.6.2",
    "@testing-library/jest-dom": "^5.15.0",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "@types/jest": "^27.0.3",
    "@types/node": "^17.0.2",
    "@types/react": "^17.0.38",
    "@types/react-dom": "^17.0.11",
    "axios": "^0.24.0",
    "d3": "^7.2.1",
    "eslint": "^7.32.0",
    "fast-equals": "^2.0.4",
    "gh-pages": "^3.2.3",
    "google-map-react": "^2.1.10",
    "google-maps": "^4.3.3",
    "immutability-helper": "^3.1.1",
    "react": "^17.0.2",
    "react-dnd": "^14.0.4",
    "react-dnd-html5-backend": "^14.0.2",
    "react-dom": "^17.0.2",
    "react-google-maps": "^9.4.5",
    "react-redux": "^7.2.6",
    "react-router": "^6.0.2",
    "react-router-dom": "^6.2.1",
    "react-scripts": "4.0.3",
    "styled-components": "^5.3.3",
    "typescript": "^4.5.4",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/googlemaps": "^3.43.3",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^4.0.0"
  }
}