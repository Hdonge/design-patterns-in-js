var singletonObject = (function () {
    //Instance stores a reference to the singleton
    var instance;

    function init() {
        //Singleton

        //Private methods and variables 
        function priavteMethod() {
            console.log("I am priavate");
        }

        var privateVariable = "I am also private";

        var priavateRandomNumber = Math.random();

        return {
            //Public methods and variables
            publicMethod: function () {
                console.log('Public can see me');
            },
            publicProperty: "I am also public",
            getRandomNumber: function () {
                return priavateRandomNumber;
            }
        };
    }

    return {
        //return the singleton instance if one exists
        // or create one if it does not
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

module.exports = singletonObject;