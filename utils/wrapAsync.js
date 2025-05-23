// module.exports = (fn)=>{
//     return (req, res, next) =>{
//         fn(req, res, next).catch(err)
//     }
// }
module.exports = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next); // Correctly passes the error to the next middleware
    };
};
