import React, { useEffect } from "react";
import $ from 'jquery';


//test side menu js
export const Utils = () => {

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
};
