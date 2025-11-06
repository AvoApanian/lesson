#include <iostream>

class Rectangle {
private:
    int largeur;
    int hauteur;

public:
    void setDimensions(int l, int h) {
        largeur = l;
        hauteur = h;
    }

   int getArea() {
        return largeur * hauteur;
    }

    int getPerimeter() {
        return 2 * (largeur + hauteur);
    }
};

int main() {
    Rectangle rect;

    rect.setDimensions(5, 10);

    std::cout << "Surface : " << rect.getArea() << std::endl;
    std::cout << "Perimtre: " << rect.getPerimeter() <<std::endl;

    return 0;
}

