import React, { useEffect } from "react";
import $ from 'jquery';
rfc
export const Utils = () => {
  useEffect(() => {
    const removeActiveClass = () => {
      const links = document
        .getElementById("topnav-menu-content")
        .getElementsByTagName("a");

      for (let i = 0; i < links.length; i++) {
        const parentClass = links[i].parentElement.getAttribute("class");
        if (parentClass === "nav-item dropdown active") {
          links[i].parentElement.classList.remove("active");
          links[i].nextElementSibling.classList.remove("show");
        }
      }
    };
  });

  useEffect(() => {
    const handleModeSwitch = (e) => {
      if (
        $("#light-mode-switch").prop("checked") &&
        e === "light-mode-switch"
      ) {
        $("html").removeAttr("dir");
        $("#dark-mode-switch").prop("checked", false);
        $("#rtl-mode-switch").prop("checked", false);
        $("#bootstrap-style").attr("href", "assets/css/bootstrap.min.css");
        $("#app-style").attr("href", "assets/css/app.min.css");
        sessionStorage.setItem("is_visited", "light-mode-switch");
      } else if (
        $("#dark-mode-switch").prop("checked") &&
        e === "dark-mode-switch"
      ) {
        $("html").removeAttr("dir");
        $("#light-mode-switch").prop("checked", false);
        $("#rtl-mode-switch").prop("checked", false);
        $("#bootstrap-style").attr("href", "assets/css/bootstrap-dark.min.css");
        $("#app-style").attr("href", "assets/css/app-dark.min.css");
        sessionStorage.setItem("is_visited", "dark-mode-switch");
      } else if (
        $("#rtl-mode-switch").prop("checked") &&
        e === "rtl-mode-switch"
      ) {
        $("#light-mode-switch").prop("checked", false);
        $("#dark-mode-switch").prop("checked", false);
        $("#bootstrap-style").attr("href", "assets/css/bootstrap-rtl.min.css");
        $("#app-style").attr("href", "assets/css/app-rtl.min.css");
        $("html").attr("dir", "rtl");
        sessionStorage.setItem("is_visited", "rtl-mode-switch");
      }
    };
    // Attach event listeners
    document
      .getElementById("light-mode-switch")
      .addEventListener("change", () => handleModeSwitch("light-mode-switch"));
    document
      .getElementById("dark-mode-switch")
      .addEventListener("change", () => handleModeSwitch("dark-mode-switch"));
    document
      .getElementById("rtl-mode-switch")
      .addEventListener("change", () => handleModeSwitch("rtl-mode-switch"));

    // Cleanup function
    return () => {
      // Remove event listeners during cleanup
      document
        .getElementById("light-mode-switch")
        .removeEventListener("change", () =>
          handleModeSwitch("light-mode-switch")
        );
      document
        .getElementById("dark-mode-switch")
        .removeEventListener("change", () =>
          handleModeSwitch("dark-mode-switch")
        );
      document
        .getElementById("rtl-mode-switch")
        .removeEventListener("change", () =>
          handleModeSwitch("rtl-mode-switch")
        );
    };
  });

  useEffect(() => {
    const handleFullscreenChange = () => {
        if (
          !document.webkitIsFullScreen &&
          !document.mozFullScreen &&
          !document.msFullscreenElement
        ) {
          console.log("pressed");
          $("body").removeClass("fullscreen-enable");
        }
      };
    
      document.addEventListener("fullscreenchange", handleFullscreenChange);
      document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
      document.addEventListener("mozfullscreenchange", handleFullscreenChange);
    
      // Cleanup function
      return () => {
        document.removeEventListener("fullscreenchange", handleFullscreenChange);
        document.removeEventListener(
          "webkitfullscreenchange",
          handleFullscreenChange
        );
        document.removeEventListener("mozfullscreenchange", handleFullscreenChange);
      };
  });

  useEffect(() => {
    const initializeMetisMenu = () => {
      $("#side-menu").metisMenu();

      $("#vertical-menu-btn").on("click", (e) => {
        e.preventDefault();
        $("body").toggleClass("sidebar-enable");
        if (992 <= $(window).width()) {
          $("body").toggleClass("vertical-collpsed");
        } else {
          $("body").removeClass("vertical-collpsed");
        }
      });
    };
  });

  useEffect(() => {
    const closeSidebarOnOutsideClick = () => {
      $("body,html").click((e) => {
        const target = $("#vertical-menu-btn");
        if (
          !target.is(e.target) &&
          target.has(e.target).length === 0 &&
          !e.target.closest("div.vertical-menu")
        ) {
          $("body").removeClass("sidebar-enable");
        }
      });
    };
  });

  useEffect(() => {
    const sidebarMenuLink = () => {
      $("#sidebar-menu a").each(function () {
        const currentURL = window.location.href.split(/[?#]/)[0];
        if (this.href === currentURL) {
          $(this).addClass("active");
          $(this).parent().addClass("mm-active");
          $(this).parent().parent().addClass("mm-show");
          $(this).parent().parent().prev().addClass("mm-active");
          $(this).parent().parent().parent().addClass("mm-active");
          $(this).parent().parent().parent().parent().addClass("mm-show");
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("mm-active");
        }
      });
    };
  });

  useEffect(() => {
    const navbarNavLink = () => {
      $(".navbar-nav a").each(function () {
        const currentURL = window.location.href.split(/[?#]/)[0];
        if (this.href === currentURL) {
          $(this).addClass("active");
          $(this).parent().addClass("active");
          $(this).parent().parent().addClass("active");
          $(this).parent().parent().parent().addClass("active");
          $(this).parent().parent().parent().parent().addClass("active");
          $(this)
            .parent()
            .parent()
            .parent()
            .parent()
            .parent()
            .addClass("active");
        }
      });
    };
  });

  useEffect(() => {
    const scrollSidebarMenu = () => {
      const sidebarMenu = $("#sidebar-menu");

      if (sidebarMenu.length > 0) {
        const activeItems = sidebarMenu.find(".mm-active .active");

        if (activeItems.length > 0) {
          const topOffset = 300;
          const targetOffset = activeItems.offset().top;

          if (targetOffset > topOffset) {
            const scrollTarget = targetOffset - topOffset;

            $(".vertical-menu .simplebar-content-wrapper").animate(
              { scrollTop: scrollTarget },
              "slow"
            );
          }
        }
      }

      // Return cleanup function
      return () => {
        $("#vertical-menu-btn").off("click");
      };
    };
  });

  useEffect(() => {
    const handleFullscreenToggle = (e) => {
      e.preventDefault();
      $("body").toggleClass("fullscreen-enable");

      if (
        document.fullscreenElement ||
        document.mozFullScreenElement ||
        document.webkitFullscreenElement
      ) {
        document.cancelFullScreen
          ? document.cancelFullScreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitCancelFullScreen &&
            document.webkitCancelFullScreen();
      } else {
        document.documentElement.requestFullscreen
          ? document.documentElement.requestFullscreen()
          : document.documentElement.mozRequestFullScreen
          ? document.documentElement.mozRequestFullScreen()
          : document.documentElement.webkitRequestFullscreen &&
            document.documentElement.webkitRequestFullscreen(
              Element.ALLOW_KEYBOARD_INPUT
            );
      }
    };
  });

  useEffect(() => {
    const handleRightBarToggle = (e) => {
      $("body").toggleClass("right-bar-enabled");
    };

    // Attach the click event listener
    $(".right-bar-toggle").on("click", handleRightBarToggle);

    // Cleanup function to remove the event listener
    return () => {
      $(".right-bar-toggle").off("click", handleRightBarToggle);
    };
  });

  useEffect(() => {
    const handleBodyClick = (e) => {
      if (!($(e.target).closest(".right-bar-toggle, .right-bar").length > 0)) {
        $("body").removeClass("right-bar-enabled");
      }
    };

    // Attach the click event listener
    $(document).on("click", "body", handleBodyClick);

    // Cleanup function to remove the event listener
    return () => {
      $(document).off("click", "body", handleBodyClick);
    };
  });

  useEffect(() => {
    const handleTopNavMenuClick = (e) => {
      if (e.target.getAttribute("href") === "#") {
        e.target.parentElement.classList.toggle("active");
        e.target.nextElementSibling.classList.toggle("show");
      }
    };

    // Attach the click event listener to topnav-menu-content links
    const topNavMenuContent = document.getElementById("topnav-menu-content");
    if (topNavMenuContent) {
      const links = topNavMenuContent.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links[i].onclick = handleTopNavMenuClick;
      }
      window.addEventListener("resize", removeActiveClass);
    }

    // Cleanup function
    return () => {
      // Remove event listeners for topnav-menu-content
      const links = topNavMenuContent.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links[i].onclick = null;
      }
      window.removeEventListener("resize", removeActiveClass);
    };
  });

  useEffect(() => {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.map(
      (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
    );

    // Initialize Bootstrap popovers
    const popoverTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    popoverTriggerList.map(
      (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
    );
  });

  useEffect(() => {
    const handleToggleSearchClick = () => {
      const target = $(".toggle-search").data("target");
      target && $(target).toggleClass("open");
    };

    // Attach the click event listener to toggle-search
    $(".toggle-search").on("click", handleToggleSearchClick);

    // Cleanup function
    return () => {
      // Remove event listener for toggle-search
      $(".toggle-search").off("click", handleToggleSearchClick);
    };
  });

  useEffect(() => {
    const handleWindowLoad = () => {
      $("#status").fadeOut();
      $("#preloader").delay(350).fadeOut("slow");
    };

    // Attach the load event listener to the window
    $(window).on("load", handleWindowLoad);

    // Cleanup function
    return () => {
      // Remove event listener for window load
      $(window).off("load", handleWindowLoad);
    };
  });

  useEffect(() => {
    if (window.sessionStorage) {
      const a = sessionStorage.getItem("is_visited");
      if (a) {
        // Code to execute when 'is_visited' is found in sessionStorage
        $(".right-bar input:checkbox").prop("checked", false);
        $("#" + a).prop("checked", true);
        t(a);
      } else {
        // Code to execute when 'is_visited' is not found in sessionStorage
        sessionStorage.setItem("is_visited", "light-mode-switch");
      }
    }
  });

  useEffect(() => {
    const handleModeChange = (e) => {
      t(e.target.id);
    };

    // Attach event listener when component mounts
    $("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").on(
      "change",
      handleModeChange
    );

    // Cleanup function to remove event listener when component unmounts
    return () => {
      $("#light-mode-switch, #dark-mode-switch, #rtl-mode-switch").off(
        "change",
        handleModeChange
      );
    };
  });
};
