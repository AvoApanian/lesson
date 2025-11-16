import torch
import torch.nn as nn
import torch.optim as optim

# Données
XTensor = torch.tensor([[1.0,2.0],
                        [3.0,4.0],
                        [5.0,6.0],
                        [7.0,8.0],
                        [9.0,10.0]])

YTensor = torch.tensor([[3.0],
                        [7.0],
                        [11.0],
                        [15.0],
                        [19.0]])

# Modèle
class Net(nn.Module):
    def __init__(self):
        super().__init__()
        self.fc1 = nn.Linear(2,5)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(5,1)

    def forward(self, x):
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

model = Net()

# Loss et Optimizer
regression = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

# Entraînement
for epoch in range(500):
    for x, y in zip(XTensor, YTensor):
        x = x.unsqueeze(0)  # ajoute dimension batch
        y = y.unsqueeze(0)

        yPred = model(x)             # forward pass
        loss = regression(yPred, y)  # calcul de la loss

        optimizer.zero_grad()        # reset gradients
        loss.backward()              # backward pass
        optimizer.step()             # mise à jour des poids

    if epoch % 100 == 0:
        print(f"Epoch {epoch}, Loss: {loss.item()}")

# Test
with torch.no_grad():
    test = torch.tensor([5.0, 6.0])
    pred = model(test.unsqueeze(0))
    print("Prediction:", pred.item())  # devrait être proche de 11
