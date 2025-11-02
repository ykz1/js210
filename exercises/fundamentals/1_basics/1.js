/*
Problems:
- trailing spaces at the end of line 5 causes syntax error by negatinv the escape \
- indented spaces are interpreted as spaces between text

See fixed below.
*/

const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \
hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus. \
';

console.log(paragraph);