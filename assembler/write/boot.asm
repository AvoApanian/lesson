org 0x7C00
bits 16

mov ax, 0xB800
mov es, ax
mov di, 160*12

.loop:

.wait:
    in al, 0x64
    test al, 1
    jz .wait

    in al, 0x60
    cmp al, 0
    je .loop

    mov ah, 0x0F

    stosw

    jmp .loop

times 510-($-$$) db 0
dw 0xAA55
