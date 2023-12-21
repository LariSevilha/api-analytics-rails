// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import CarouselController from "./carousel_controller"
application.register("carousel", CarouselController)

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import LoadingController from "./loading_controller"
application.register("loading", LoadingController)

import NavbarController from "./navbar_controller"
application.register("navbar", NavbarController)

import NotificationController from "./notification_controller"
application.register("notification", NotificationController)

import SlideBlogController from "./slide_blog_controller"
application.register("slide-blog", SlideBlogController)

import SlideClientController from "./slide_client_controller"
application.register("slide-client", SlideClientController)
