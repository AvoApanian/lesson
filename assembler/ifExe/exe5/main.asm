section .data
x db 'A';

section .text
global main
main:
	movzx eax,byte [rel x];
	
	cmp eax,1;
	jg greater;
	jl less;
	mov eax,1;
	jmp done;

greater:
	mov eax,0;
less:
	mov eax,0;
done:
	ret;
