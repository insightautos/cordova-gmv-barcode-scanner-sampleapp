var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    onDeviceReady: function() {
        var that = this;
        document.getElementById("start-scan").onclick = function() {
            window.plugins.GMVBarcodeScanner.scan({}, function(err, result) {
                //Handle Errors
                if(err) return that.updateResults(err, true);

                //Do something with the data.
                that.updateResults(result);
            });
        };
        document.getElementById("start-license-scan").onclick = function() {
            window.plugins.GMVBarcodeScanner.scanLicense(function(err, result) {
                if(err) return that.updateResults(err, true);
                that.updateResults(result);
            });
        };
        document.getElementById("start-vin-scan").onclick = function() {
            window.plugins.GMVBarcodeScanner.scanVIN(function(err, result) {
                if(err) return that.updateResults(err, true);
                that.updateResults(result);
            });
        };

    },
    updateResults: function(result, err) {
        var ele = document.getElementById("last-result");
        if(err) {
            addClass(ele, "error");
        } else {
            removeClass(ele, "error");
        }
        if(typeof result == "object") {
            result = JSON.stringify(result, null, 2);
        }
        if(err) {
            result = "ERROR\n"+result;
        }
        document.getElementById("last-result").innerText = result
    }
};

function hasClass(ele,cls) {
    return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}

function addClass(ele,cls) {
    if (!hasClass(ele,cls)) ele.className += " "+cls;
}

function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
}

app.initialize();