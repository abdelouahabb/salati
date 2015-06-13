#coding: utf-8
from tornado.web import RequestHandler
from tornado.gen import coroutine


class IndexHandler(RequestHandler):
    @coroutine
    def get(self):
        self.render("index.html")
