import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const KriterSayfasi = () => {
  // Örnek araç verisi
  const aracBilgileri = {
    fotoUrl: 'https://i.ytimg.com/vi/AIEEVKOcapE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBg-Y8wfmehloyEqZo2CAibGSi_5A',
    ad: 'Araç 1',
    model: 'Model 1',
    fiyat: '1.000.000 ₺',
    yakitCinsi: 'Benzin',
    vitesTipi: 'Otomatik',
    kiralamaBedeli: '500 ₺',
    gunlukKiralamaBedeli: '100 ₺',
    toplamKiralamaTutari: '1.500 ₺',
  };

  const handleKirala = () => {
    console.log('Araç kiralandı!');
  };

  return (
    <View style={stiller.container}>
      <View style={stiller.fotoContainer}>
        <Image style={stiller.foto} source={{ uri: aracBilgileri.fotoUrl }} />
      </View>

      <View style={stiller.aracBilgisiContainer}>
        <Text style={stiller.baslik}>{aracBilgileri.ad}</Text>
        <Text style={stiller.kalin}>Model:</Text>
        <Text style={stiller.bilgi}>{aracBilgileri.model}</Text>
        <Text style={stiller.kalin}>Fiyat:</Text>
        <Text style={stiller.bilgi}>{aracBilgileri.fiyat}</Text>
        <Text style={stiller.kalin}>Yakıt Cinsi:</Text>
        <Text style={stiller.bilgi}>{aracBilgileri.yakitCinsi}</Text>
        <Text style={stiller.kalin}>Vites Tipi:</Text>
        <Text style={stiller.bilgi}>{aracBilgileri.vitesTipi}</Text>
        <Text style={stiller.kalin}>Kiralama Bedeli:</Text>
        <Text style={stiller.bilgi}>{aracBilgileri.kiralamaBedeli}</Text>
        <Text style={stiller.kalin}>Günlük Kiralama Bedeli:</Text>
        <Text style={stiller.bilgi}>{aracBilgileri.gunlukKiralamaBedeli}</Text>
        <Text style={stiller.kalin}>Toplam Kiralama Tutarı:</Text>
        <Text style={stiller.bilgi}>{aracBilgileri.toplamKiralamaTutari}</Text>

        <TouchableOpacity style={stiller.kiralaButon} onPress={handleKirala}>
          <Text style={stiller.kiralaButonMetni}>Kirala</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const stiller = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  fotoContainer: {
    marginBottom: 16,
  },
  foto: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  aracBilgisiContainer: {
    width: '100%',
  },
  baslik: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bilgi: {
    marginBottom: 4,
  },
  kalin: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  kiralaButon: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  kiralaButonMetni: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default KriterSayfasi;
