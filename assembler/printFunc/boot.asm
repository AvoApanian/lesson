[org 0x7C00]
[bits 16]

start:
    mov ax, 0xB800
    mov es, ax
    mov di, 160*12        

    mov si, message

print:
    lodsb
    cmp al, 0
    je done
    mov ah, 0x0F          
    stosw
    jmp print

done:
    hlt                   

message db "hello world from ring 0", 0

times 510-($-$$) db 0
dw 0xAA55

