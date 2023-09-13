/******* Global Variables *******/
// initial horizontal position of pointer for sidebar behavior
var initX = 0;

/******* Core Functions *******/
/**
 * This shows or hides a modal along with a transparent layer between the modal and the page.
 * @param {string} m - The id of the modal, sans the prefix "modal-"
 */
function modal(m){
	if($("#modal-background.open").length){
		if($("#modal-" + m + ".open").length){
			$("#modal-background, #modal-" + m).fadeOut(300, function(){ $(this).removeClass("open"); });
		} else {
			$(".modal.open").hide().removeClass("open");
			$("#modal-" + m).fadeIn(300, function(){ $(this).addClass("open"); });
		}
	} else {
		$("#modal-background, #modal-" + m).fadeIn(300, function(){ $(this).addClass("open"); });
	}
}

/*** Listeners ***/
document.addEventListener("pointerdown", function(e){
	if($("#modal-background.open").length){
		initX = -1;
		if(e.target.id == "modal-background"){
			modal($(".modal.open").attr("id").replace("modal-",""));
		}
	} else {
		initX = e.x;
	}
});

document.addEventListener("pointerup", function(e){
	// if a modal isn't open
	if(initX > -1){
		// if the sidebar is closed and the pointer moved left, open the sidebar
		if(e.x < initX && !$("#sidebar").hasClass("open")){
			$("#sidebar").addClass("open");
		// if the sidebar is open, the pointer moved right, and the point event was not on the sidebar, close the sidebar
		} else if($("#sidebar").hasClass("open") && (e.x > initX || (e.x == initX && !e.target.id.startsWith("sidebar")))){
			$("#sidebar").removeClass("open");
		}
	}
});