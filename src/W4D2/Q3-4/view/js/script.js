$(() => {
    $(".addToCart").submit(function() {
        console.log("this.id.value" + this.id.value);
        const data = {
            id : this.id.value
        };
        $.post({
            url: "/addToCart",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done((data) => {
            console.log(data.total);
            if(data.total > 0) {
                $("#cart").show();
                $("#count").html(data.total);
            }

        })
            .fail(() => {
                console.log('Server Error');
            });
        return false;
    });
});