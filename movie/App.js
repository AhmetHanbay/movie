import React from "react";
import { View, Text, Button, ScrollView, SafeAreaView, StyleSheet, Image } from "react-native";
import { create } from "react-test-renderer";

function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.back_container}>
        <Text style={styles.main_title}>MOVIE</Text>
      </View>
      <View>
        <Text style={styles.most}>En Çok İzlenenler 🎥</Text>
      </View>
      <ScrollView horizontal>
        <Image style={styles.image} source={{ uri: "https://tr.web.img2.acsta.net/pictures/14/04/15/13/51/015977.jpg" }} />
        <Image style={styles.image} source={{ uri: "https://m.media-amazon.com/images/M/MV5BZjk0Nzg0NjktNTJlMC00Y2RjLTgyOTQtMTdlZTlhM2IyMjU2L2ltYWdlXkEyXkFqcGdeQXVyMjQwNDExMTA@._V1_.jpg" }} />
        <Image style={styles.image} source={{ uri: "https://upload.wikimedia.org/wikipedia/tr/e/ea/Karayip_Korsanlar%C4%B1_Salazar%E2%80%99%C4%B1n_%C4%B0ntikam%C4%B1_T%C3%BCrk%C3%A7e_Afi%C5%9F.jpg" }} />
        <Image style={styles.image} source={{ uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj_2fiPYlMF0gzAwAxDznX-VPGQh4K72IByO__ylYc1oW2EWWA" }} />
        <Image style={styles.image} source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRa6unfwMuVbNmVmFJlc4oDmZfbM9EQV2HRzDC5TMdj4p6VeDgH" }} />
        <Image style={styles.image} source={{ uri: "https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg" }} />
        <Image style={styles.image} source={{ uri: "https://productimages.hepsiburada.net/s/31/375-375/10330717454386.jpg" }} />
        <Image style={styles.image} source={{ uri: "https://upload.wikimedia.org/wikipedia/tr/2/29/Ters_Y%C3%BCz_-_afi%C5%9F.jpg" }} />
      </ScrollView>
      <View>
        <Text style={styles.movies}>Uyumsuz</Text>
        <Text style={styles.movie}>🗓️ : 2014</Text>
        <Text style={styles.movie}>🎬 : Aksiyon/Macera</Text>
        <Text style={styles.movie}>⏳ : 2 saat 19 dakika</Text>
        <Image style={styles.movie_image} source={{ uri: "https://tr.web.img2.acsta.net/pictures/14/04/15/13/51/015977.jpg" }} />
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          Uyumsuz, 2014 ABD yapımı bilimkurgu ve aksiyon filmidir. Veronica Roth'un aynı isimli
          romanından uyarlanmıştır. Başrollerinde Shailene Woodley, Theo James, Ashley Judd,
          Jai Courtney, Ray Stevenson, Zoë Kravitz, Miles Teller, Tony Goldwyn, Maggie Q ve
          Kate Winslet gibi isimler yer alır.
        </Text>
      </View>
      <View>
        <Text style={styles.movies}>Fırıldak Ailesi</Text>
        <Text style={styles.movie}>🗓️ : 2017</Text>
        <Text style={styles.movie}>🎬 : Komedi/Animasyon</Text>
        <Text style={styles.movie}>⏳ : 1 saat 28 dakika</Text>
        <Image style={styles.movie_image} source={{ uri: "https://m.media-amazon.com/images/M/MV5BZjk0Nzg0NjktNTJlMC00Y2RjLTgyOTQtMTdlZTlhM2IyMjU2L2ltYWdlXkEyXkFqcGdeQXVyMjQwNDExMTA@._V1_.jpg" }} />
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          Fırıldak Ailesi, Türk animasyon televizyon dizisidir.
          11 Şubat 2013 tarihinde Star TV'de yayımlanmaya başlamıştır.
          Grafi2000 Prodüksiyon tarafından hazırlanan Fırıldak Ailesi,
          Türk televizyonlarında yetişkinlere yönelik yapılan ilk yerli çizgi filmdir.
        </Text>
      </View>
      <View>
        <Text style={styles.movies}>Karayip Korsanları 5 Salazar'ın Intikamı</Text>
        <Text style={styles.movie}>🗓️ : 2017</Text>
        <Text style={styles.movie}>🎬 : Aksiyon/Macera/Fantastik</Text>
        <Text style={styles.movie}>⏳ : 2 saat 9 dakika</Text>
        <Image style={styles.movie_image} source={{ uri: "https://upload.wikimedia.org/wikipedia/tr/e/ea/Karayip_Korsanlar%C4%B1_Salazar%E2%80%99%C4%B1n_%C4%B0ntikam%C4%B1_T%C3%BCrk%C3%A7e_Afi%C5%9F.jpg" }} />
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          Karayip Korsanları Salazar’ın İntikamı, Karayip Korsanları film serisinin beşinci filmi
          olan fantastik türdeki 2017 Amerikan yapımı film. Filmin yönetmenliğini
          Joachim Rønning ve Espen Sandberg yaparken senaryosunu Jeff Nathanson yazdı.
          Filmin yapımcısı diğer dört filmde olduğu gibi Jerry Bruckheimer oldu.
        </Text>
      </View>
      <View>
        <Text style={styles.movies}>The Tutor</Text>
        <Text style={styles.movie}>🗓️ : 2023</Text>
        <Text style={styles.movie}>🎬 : Aksiyon/Gerilim/Gizem</Text>
        <Text style={styles.movie}>⏳ : 1 saat 32 dakika</Text>
        <Image style={styles.movie_image} source={{ uri: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQj_2fiPYlMF0gzAwAxDznX-VPGQh4K72IByO__ylYc1oW2EWWA" }} />
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          The Tutor, Ryan King tarafından yazılan ve Jordan Ross tarafından yönetilen 2023 yapımı bir
          Amerikan psikolojik gerilim filmidir. 24 Mart 2023'te vizyona giren filmde
          Garrett Hedlund, Noah Schnapp, Victoria Justice ve Jonny Weston yer alıyor.
        </Text>
      </View>
      <View>
        <Text style={styles.movies}>Jailer</Text>
        <Text style={styles.movie}>🗓️ : 2023</Text>
        <Text style={styles.movie}>🎬 : Aksiyon/Suç</Text>
        <Text style={styles.movie}>⏳ : 2 saat 48 dakika</Text>
        <Image style={styles.movie_image} source={{ uri: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRa6unfwMuVbNmVmFJlc4oDmZfbM9EQV2HRzDC5TMdj4p6VeDgH" }} />
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          Jailer, Nelson Dilipkumar'ın yönettiği ve yapımcılığını Sun Pictures'tan Kalanithi Maran'ın yaptığı,
          2023 yapımı Tamil dilinde bir Hint aksiyon komedi filmidir.
          Filmde başrolde Rajinikanth yer alırken, yardımcı rollerde Vinayakan, Ramya Krishnan,
          Vasanth Ravi, Tamannaah, Sunil, Mirnaa Menon ve Yogi Babu yer alıyor.
        </Text>
      </View>
      <View>
        <Text style={styles.movies}>Tenet</Text>
        <Text style={styles.movie}>🗓️ : 2020</Text>
        <Text style={styles.movie}>🎬 : Aksiyon/Gerilim</Text>
        <Text style={styles.movie}>⏳ : 2 saat 30 dakika</Text>
        <Image style={styles.movie_image} source={{ uri: "https://m.media-amazon.com/images/M/MV5BOGJmZjcxNTAtYjViZS00YzJmLTlkMzgtZmVkYTQ5YjUwMjIyXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_SY1000_CR0,0,674,1000_AL_.jpg" }} />
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          Tenet, Christopher Nolan’ın senaryosunu yazıp yönetmenliğini yaptığı; başrollerini
          John David Washington, Robert Pattinson, Elizabeth Debicki ve Kenneth Branagh’ın
          paylaştığı Birleşik Krallık ve Amerika Birleşik Devletleri ortak yapımı casus
          filmi.
        </Text>
      </View>
      <View>
        <Text style={styles.movies}>Rüzgarı Dizginleyen Çocuk</Text>
        <Text style={styles.movie}>🗓️ : 2019</Text>
        <Text style={styles.movie}>🎬 : Aile/Dram/Tarih</Text>
        <Text style={styles.movie}>⏳ : 1 saat 53 dakika</Text>
        <Image style={styles.movie_image} source={{ uri: "https://productimages.hepsiburada.net/s/31/375-375/10330717454386.jpg" }} />
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          The Boy Who Harnessed the Wind 2019 Birleşik Krallık yapımı dramatik filmdir.
          Chiwetel Ejiofor'un yazdığı ve yönettiği yapım William Kamkwamba adlı
          bir Malavili mucidin başından geçen olayları konu almaktadır.
          2019 Sundance Film Festivali'nde gösterime giren filmin dağıtımı Netflix
          tarafından üstlenilmiştir.
        </Text>
      </View>
      <View>
        <Text style={styles.movies}>Ters Yüz</Text>
        <Text style={styles.movie}>🗓️ : 2015</Text>
        <Text style={styles.movie}>🎬 :  Çocuk/Komedi</Text>
        <Text style={styles.movie}>⏳ : 1 saat 35 dakika</Text>
        <View>
          <Image style={styles.movie_image} source={{ uri: "https://upload.wikimedia.org/wikipedia/tr/2/29/Ters_Y%C3%BCz_-_afi%C5%9F.jpg" }} />
        </View>
      </View>
      <View style={styles.movie_position}>
        <Text style={styles.movie_text}>
          Ters Yüz, yönetmenliğini Pete Docter'ın yaptığı 2015 yapımı
          Pixar Animasyon Stüdyoları tarafından üretilmiş 3 boyutlu bilgisayar
          animasyonu komedi-drama filmi. Eleştirmenler tarafından da beğenilen film 73.
          Altın Küre Ödülleri'nde En İyi Animasyon Film ödülünü aldı.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05375a',
    flex: 1,
  },
  back_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  main_title: {
    color: 'white',
    fontSize: 30,
    marginTop: 10,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    fontFamily: 'LilitaOne-Regular',
  },
  most: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 15,
    fontFamily: 'BlackOpsOne-Regular',
  },
  movies: {
    color: 'white',
    fontSize: 26,
    marginLeft: 12,
    marginTop: 10,
    margin: 5,
    fontFamily: 'LilitaOne-Regular',
  },
  movie: {
    color: 'white',
    fontSize: 17,
    marginLeft: 12,
    marginTop: 10,
    margin: 5,
    fontFamily: 'LilitaOne-Regular',
  },
  image: {
    width: 100,
    height: 180,
    borderRadius: 10,
    margin: 5,
  },
  movie_image: {
    width: 100,
    height: 150,
    borderRadius: 10,
    marginLeft: 10,
  },
  movie_position: {
    marginRight: 10,
  },
  movie_text: {
    color: 'white',
    marginLeft: 130,
    marginTop: -150,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    fontFamily: 'Orbitron-SemiBold',
    fontSize: 12,
  },

});

export default App;