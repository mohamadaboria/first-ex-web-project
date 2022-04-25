$(document).ready(function () {

    // Sidebar
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

    // Table Trash
    $(".delete").on("click" , function() {
        $(this).parents("tr").remove()
    });

    $(".medicine-big-box-item").css("paddingBottom" ,  $(".medicine-big-box-item .foot").innerHeight())
});