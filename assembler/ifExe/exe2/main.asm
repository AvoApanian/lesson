section .text
global _start

_start:
    mov eax, 5       ; eax = 5
    mov ebx, 8       ; ebx = 8

    cmp eax, ebx
    jg  greater      ; si eax > ebx, goto greater

    ; sinon ebx est plus grand ou égal
    mov ecx, ebx
    jmp done

greater:
    mov ecx, eax     ; eax est plus grand

done:
    ; ici ecx contient le plus grand

