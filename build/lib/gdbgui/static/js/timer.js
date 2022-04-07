// window.setInterval('refresh()', 5000);

// refreshed = false;

// if (refreshed == false) {
//     refreshed = true;

//     function refresh() {
//         window.location.href();
//     }
// }

window.setTimeout('refresh()', 5000);
function refresh() {
    $.ajax(window.location.href + '/static/js/main.js?_={{version}}',   // request url
    {
        success: function (data, status, xhr) {// success callback function
            // window.location.reload();
            console.log('executed');
        },

        error: function (status) {// success callback function
            window.location.reload();
            console.log('executed');
        }
    }
);
}
