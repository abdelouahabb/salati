#-*- coding:utf-8 -*-

import tornado.ioloop
import tornado.httpserver
from tornado.options import define, options
import handlers, os


#ip   = os.environ['OPENSHIFT_PYTHON_IP']
#port = int(os.environ['OPENSHIFT_PYTHON_PORT'])
define("port",default=8000,type=int)
define("address",default="192.168.1.3") 
# if you want to test on your machine, avoid localhost, use your wifi address,
# so you can test easily offline app, by stopping the server.

urls = [
    (r"/", handlers.IndexHandler),
    (r"/(.*)", tornado.web.StaticFileHandler, {"path":r"{0}".format(os.path.dirname(__file__))}),
]

settings = dict({
    "template_path": os.path.join(os.path.dirname(__file__),"templates"),
    "static_path": os.path.join(os.path.dirname(__file__),"static"),
    "compress_response": True,
})

application = tornado.web.Application(urls,**settings)


if __name__ == "__main__":
    options.parse_command_line()
    server = tornado.httpserver.HTTPServer(application)
    server.listen(options.port, options.address) # uncomment this if you use your wifi address so you can test better
    #server.listen(port, ip)
    tornado.ioloop.IOLoop.instance().start()