module.exports = (app) => {

    /**@coustome_route One way to add custome route*/
    /**@start */
    app.get('/ping', (req, res) => {
        res.send('pong')
    })
    /**@end */


    /**@coustome_route Another way to add custom route express router syntax*/
    /**@start */
    var router = app.loopback.Router();
    router.get('/pong', (req, res) => {
        res.send('ping')
    })
    app.use(router)
    /**@end */



    /**@coustome_route In fact you can also add routes right in server.js using the Express API.*/
    /**@here go to server.js */
}