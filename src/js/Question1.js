var count= (function(){
    var counter = 0;
    function add(){
        return counter += 1;
    }
    function  reset(){
        counter =0;
    }
    return{
        addition:add,
        resetting:reset,
        value: function() {
            return counter;
        }
    }
})();
count.addition();
count.addition()