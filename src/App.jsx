import { useState } from 'react'
import './styles.css'

/* Challenge

Hava durumu verileri şu anda JSX'e sabit olarak kodlanmıştır. Göreviniz, uygulamanın dinamik olabilmesi için JavaScript aracılığıyla eklemektir. 

1. Günün şu anda Pazartesi, Salı veya Çarşamba olarak ayarlanmış olmasına bağlı olarak, uygulama aşağıdakiler için doğru öğeleri otomatik olarak görüntülemek üzere durumu kullanmalıdır:
- arka plan resmi
- emoji simgesi (☀️, 🌧️ veya ❄️)
- hava durumu
- düşük & yüksek sıcaklıklar
- haftanın günü

2. Test butonuna tıkladığınızda, uygulama bir sonraki gün için yukarıda listelenen doğru öğelerin tümünü weatherData array'inde göstermelidir: Pazartesi -> Salı -> Çarşamba -> Pazartesi, vb. 

3. WeatherData array taşınabilir, ancak başka bir şekilde değiştirilmemelidir. 

4. Kod düzenli ve kolay anlaşılır olmalıdır. 
*/

export default function App() {
  const weatherData = [
    {
      id: 0,
      day: 'Pazartesi',
      condition: 'Güneşli',
      lowTemp: 20,
      highTemp: 38,
    },
    {
      id: 1,
      day: 'Salı',
      condition: 'Yağmurlu',
      lowTemp: 8,
      highTemp: 15,
    },
    {
      id: 2,
      day: 'Çarşamba',
      condition: 'Karlı',
      lowTemp: -5,
      highTemp: 3,
    },
  ]
  const [currentDayIndex, setCurrentDayIndex] = useState(0)

  const handleTestButtonClick = () =>{
    const nextDayIndex = (currentDayIndex + 1) % weatherData.length
    setCurrentDayIndex(nextDayIndex)
  }

  const currentWeatherData = weatherData[currentDayIndex]

  return (
    <div className={`app-container ${currentWeatherData.condition.toLowerCase()}-background`}>
      <div className='weather-container'>
        <div className='icon'>{getWeatherIcon(currentWeatherData.condition)}</div>
        <div className='condition-text'>{currentWeatherData.condition}</div>
        <div className='temp-range-container'>
          <div className='low-temp-container'>
            <p className='low-temp-data'>{currentWeatherData.lowTemp}</p>
            <p>En Düşük</p>
          </div>
          <div className='high-temp-container'>
            <p className='high-temp-data'>{currentWeatherData.highTemp}</p>
            <p>En Yüksek</p>
          </div>
        </div>
        <div className='day'>{currentWeatherData.day}</div>
      </div>
      <button onClick={handleTestButtonClick}>Test</button>
    </div>
  )
}
function getWeatherIcon(condition) {
  switch (condition.toLowerCase()) {
    case 'güneşli':
      return '☀️';
    case 'yağmurlu':
      return '🌧️';
    case 'karlı':
      return '❄️';
    default:
      return '';
  }
}