# MAPROUTE-REACT-NATIVE
Aplicação de localização e traçar rotas
# APlicação de rotas e localização tempo real com Google maps
### Dependencias do projeto
# npm install react-native-maps-directions
- Para realizar localização em tempo real necessita também estar instaldo dependencia maps
- Eta e a documentação do maps https://github.com/react-native-maps/react-native-maps
- Usei recursos de scrollview horizontal,useEcft para localizar usuario em tempo real e mostrar na tela,useRef é hooks em geral
- Maior dificuldate foi no erro "route requeste". Comigo o problema era em relação a latitude e longitude,passei valores que não 
corresponde API
- Para localizar de forma correta latitude e longitude desejada,clica com o botão do direito do mouse em cima do local que deseja,
e obvio necessario estar aberto o google maps para realizar procedimento, dois primeiros valores corresponde ao formato da latitude
e longitude que API suporta;
