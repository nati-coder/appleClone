$(document).ready(function () {
  // Run this code only after the page is fully loaded

  // Step 1: Hide all footer lists if screen is mobile size (≤768px)
  if ($(window).width() <= 768) {
    $(".footer-links-wrapper ul").hide();
  }

  // Step 2: Add click event to each footer title (h3)
  $(".footer-links-wrapper h3").click(function () {
    // Step 3: Only apply accordion behavior on mobile
    if ($(window).width() <= 768) {
      // Close all other opened lists except the clicked one
      $(".footer-links-wrapper ul").not($(this).next()).slideUp();

      // Remove "expanded" class from other headings
      $(".footer-links-wrapper h3").not($(this)).removeClass("expanded");

      //Toggle (open/close) the clicked section
      $(this).next().slideToggle();

      // Add/remove "expanded" class for styling (e.g., + / - icon)
      $(this).toggleClass("expanded");
    }
  });

  //  Step 4: Handle screen resizing
  $(window).resize(function () {
    //  If screen becomes desktop (>768px)
    if ($(window).width() > 768) {
      // Show all lists
      $(".footer-links-wrapper ul").show();
    } else {
      //  If back to mobile size
      // Hide all lists again
      $(".footer-links-wrapper ul").hide();

      // Remove expanded state from all headings
      $(".footer-links-wrapper h3").removeClass("expanded");
    }
  });
});
