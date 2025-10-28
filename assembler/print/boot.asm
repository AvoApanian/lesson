[org 0x7c00]
[bits 16]

mov ax,0xB800
mov es,ax
mov di,160*12

mov al,'h'
mov ah,0x0F
stosw

mov al,'i'
mov ah,0x0F
stosw

jmp $

times 510 - ($ - $$) db 0
dw 0xAA55
