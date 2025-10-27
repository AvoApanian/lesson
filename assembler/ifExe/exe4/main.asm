mov eax, 5
cmp eax, 10
jg greater
mov eax, 0
jmp done

greater:
    mov eax, 1
done:

