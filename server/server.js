
// bring express into this file
const express = require( 'express' );
const app = express();

const PORT = 5000;

app.use( express.static( 'server/public' ) );

app.listen( PORT, () => { console.log( 'Listening on port', PORT, '...' ) } );