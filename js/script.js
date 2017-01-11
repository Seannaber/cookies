//var name = prompt("What is your name?");
//var visits = $.cookie("visits", Number);


if ($.cookie("sugar") > 0) {
	$("#sugar").html("You've eaten " + $.cookie("sugar") + " sugar cookies.");
} else {
	$.cookie("sugar", 0);
};

if ($.cookie("choco") > 0) {
	$("#choco").html("You've eaten " + $.cookie("choco") + " chocolate cookies.");
} else {
	$.cookie("choco", 0);
};

if ($.cookie("lemon") > 0) {
	$("#lemon").html($.cookie("lemon"));
} else {
	$.cookie("lemon", 0);
};



function addsugar() {
	$.cookie("sugar", Number($.cookie("sugar")) + 1);
	$("#sugar").html("You've eaten " + $.cookie("sugar") + " sugar cookies.");
};

function minsugar() {
	$.cookie("sugar", Number($.cookie("sugar")) - 1);
	$("#sugar").html("You've eaten " + $.cookie("sugar") + " sugar cookies.");
};

function addchoco() {
	$.cookie("choco", Number($.cookie("choco")) + 1);
	$("#choco").html("You've eaten " + $.cookie("choco") + " chocolate cookies.");
};

function minchoco() {
	$.cookie("choco", Number($.cookie("choco")) - 1);
	$("#choco").html("You've eaten " + $.cookie("choco") + " chocolate cookies.");
};

function addlemon() {
	$.cookie("lemon", Number($.cookie("lemon")) + 1);
	$("#lemon").html($.cookie("lemon"));
};

function minlemon() {
	$.cookie("lemon", Number($.cookie("lemon")) - 1);
	$("#lemon").html($.cookie("lemon"));
};

$("#deletecookies").click(function() {
	$.cookie("sugar", 0);
	$("#sugar").html("You've eaten " + $.cookie("sugar") + " sugar cookies.");
	$.cookie("choco", 0);
	$("#choco").html("You've eaten " + $.cookie("choco") + " chocolate cookies.");
	$.cookie("lemon", 0);
	$("#lemon").html($.cookie("lemon"));
});

/*function deletecookies() {
	$.cookie("sugar", null);
	$.cookie("choco", null);
	$.cookie("lemon", null);
};

if (visits != undefined) {
	$.cookie("visits", visits + 1);
} else {
	$.cookie("visits", 1);
};

$("#cookietime2").html("You've visited the site " + $.cookie("visits") + " times.");*/