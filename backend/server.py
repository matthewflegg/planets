"""
Implements a simple HTTP server.
"""
import socket
import utils

SERVER_HOST = '0.0.0.0'
SERVER_PORT = 8000

server_socket = utils.create_socket(SERVER_HOST, SERVER_PORT)
print(f'Listening on port {SERVER_PORT}...')

while True:
    utils.handle_requests(server_socket)

server_socket.close()
