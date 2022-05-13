"""
Implements a simple request handler.
"""
import socket


def handle_requests(server_socket: socket.socket) -> None:
    client_connection, client_address = server_socket.accept()
    request = client_connection.recv(1024).decode()
    
    headers = request.split('\n')
    filename = headers[0].split()[1]
    
    if filename == '/':
        filename = '/pages/index.html'
    
    with open('../' + filename, 'r', encoding='utf8') as webpage:
        content = webpage.read()
    
    response = 'HTTP/1.0 200 OK\n\n' + content
    client_connection.sendall(response.encode())
    client_connection.close()

def create_socket(host: str, port: int) -> socket.socket:
    server_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    server_socket.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    server_socket.bind((host, port))
    server_socket.listen(1)

    return server_socket