org 0x7C00
bits 16

start:
    mov ax, 0xB800   
    mov es, ax
    mov di, 160*12   

    mov cx, 10      
    mov bx, 0

for_loop:
    cmp bx, cx
    jge endLoop

    mov al, bl      
    add al, '0'      ; convertir en ASCII
    mov ah, 0x0F     
    stosw            

    inc bx
    jmp for_loop

endLoop:
    jmp $           

times 510 - ($ - $$) db 0
dw 0xAA55

