import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RezervasyonSayfasi = () => {
  const [baslamaTarihi, setBaslamaTarihi] = useState('01/01/2023');
  const [bitisTarihi, setBitisTarihi] = useState('10/01/2023');
  const [aracAdi, setAracAdi] = useState('Araç 1');
  const [plaka, setPlaka] = useState('34 ABC 123');
  const [toplamTutar, setToplamTutar] = useState('500 ₺');

  const handleRezerveEt = () => {
    // Rezervasyon işlemleri burada yapılabilir
    Alert.alert('Rezervasyon İşlemi', 'Araç başarıyla rezerve edildi.');
  };

  const handleIptalEt = () => {
    // İptal işlemleri burada yapılabilir
    Alert.alert('Rezervasyon İptali', 'Rezervasyon başarıyla iptal edildi.');
  };

  return (
    <View style={stiller.container}>
      <Text style={stiller.baslik}>Başlama Tarihi:</Text>
      <Text style={stiller.bilgi}>{baslamaTarihi}</Text>

      <Text style={stiller.baslik}>Bitiş Tarihi:</Text>
      <Text style={stiller.bilgi}>{bitisTarihi}</Text>

      <Text style={stiller.baslik}>Araç Adı:</Text>
      <Text style={stiller.bilgi}>{aracAdi}</Text>

      <Text style={stiller.baslik}>Plaka:</Text>
      <Text style={stiller.bilgi}>{plaka}</Text>

      <Text style={stiller.baslik}>Toplam Tutar:</Text>
      <Text style={stiller.bilgi}>{toplamTutar}</Text>

      <TouchableOpacity style={stiller.rezerveButon} onPress={handleRezerveEt}>
        <Text style={stiller.butonMetni}>Rezerve Et</Text>
      </TouchableOpacity>

      <TouchableOpacity style={stiller.iptalButon} onPress={handleIptalEt}>
        <Text style={stiller.butonMetni}>İptal Et</Text>
      </TouchableOpacity>
    </View>
  );
};

const stiller = StyleSheet.create({
  container: {
    padding: 16,
  },
  baslik: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bilgi: {
    fontSize: 16,
    marginBottom: 8,
  },
  rezerveButon: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  iptalButon: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    alignItems: 'center',
  },
  butonMetni: {
    color: 'white',
    fontSize: 16,
  },
});

export default RezervasyonSayfasi;
