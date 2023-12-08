import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AracKiraFormu = () => {
  const [aracAdi, setAracAdi] = useState('');
  const [aracModeli, setAracModeli] = useState('');
  const [yakitTipi, setYakitTipi] = useState('');
  const [vitesTipi, setVitesTipi] = useState('');
  const [kiraSuresi, setKiraSuresi] = useState('');
  const [gunlukKiraBedeli, setGunlukKiraBedeli] = useState('');
  const [toplamKiraBedeli, setToplamKiraBedeli] = useState('');

  const handleKira = () => {
    // Burada kira işlemlerini gerçekleştirebilirsin.
    console.log('Araç Adı:', aracAdi);
    console.log('Araç Modeli:', aracModeli);
    console.log('Yakıt Tipi:', yakitTipi);
    console.log('Vites Tipi:', vitesTipi);
    console.log('Kira Süresi:', kiraSuresi);
    console.log('Günlük Kira Bedeli:', gunlukKiraBedeli);
    console.log('Toplam Kira Bedeli:', toplamKiraBedeli);
  };

  return (
    <View style={stiller.container}>
      <View style={stiller.sutun}>
        <Text style={stiller.etiket}>Araç Adı:</Text>
        <TextInput
          style={stiller.input}
          onChangeText={(text) => setAracAdi(text)}
          value={aracAdi}
          placeholder="Araç Adı"
        />
      </View>

      <View style={stiller.sutun}>
        <Text style={stiller.etiket}>Araç Modeli:</Text>
        <TextInput
          style={stiller.input}
          onChangeText={(text) => setAracModeli(text)}
          value={aracModeli}
          placeholder="Araç Modeli"
        />
      </View>

      <View style={stiller.sutun}>
        <Text style={stiller.etiket}>Yakıt Tipi:</Text>
        <TextInput
          style={stiller.input}
          onChangeText={(text) => setYakitTipi(text)}
          value={yakitTipi}
          placeholder="Yakıt Tipi"
        />
      </View>

      <View style={stiller.sutun}>
        <Text style={stiller.etiket}>Vites Tipi:</Text>
        <TextInput
          style={stiller.input}
          onChangeText={(text) => setVitesTipi(text)}
          value={vitesTipi}
          placeholder="Vites Tipi"
        />
      </View>

      <View style={stiller.sutun}>
        <Text style={stiller.etiket}>Kira Süresi:</Text>
        <TextInput
          style={stiller.input}
          onChangeText={(text) => setKiraSuresi(text)}
          value={kiraSuresi}
          placeholder="Kira Süresi"
        />
      </View>

      <View style={stiller.sutun}>
        <Text style={stiller.etiket}>Günlük Kira Bedeli:</Text>
        <TextInput
          style={stiller.input}
          onChangeText={(text) => setGunlukKiraBedeli(text)}
          value={gunlukKiraBedeli}
          placeholder="Günlük Kira Bedeli"
        />
      </View>

      <View style={stiller.sutun}>
        <Text style={stiller.etiket}>Toplam Kira Bedeli:</Text>
        <TextInput
          style={stiller.input}
          onChangeText={(text) => setToplamKiraBedeli(text)}
          value={toplamKiraBedeli}
          placeholder="Toplam Kira Bedeli"
        />
      </View>

      <TouchableOpacity style={stiller.buton} onPress={handleKira}>
        <Text style={stiller.butonMetni}>Kirala</Text>
      </TouchableOpacity>
    </View>
  );
};

const stiller = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    padding: 16,
  },
  sutun: {
    marginBottom: 16,
  },
  etiket: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  buton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  butonMetni: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AracKiraFormu;
