import './PageLoading.css'
import { HashLoader} from 'react-spinners'
function PageLoading() {
  return (
    <div className='Loding'>
        <HashLoader
          color="#025595"
          size={70}
        />
    </div>

  )
}

export default PageLoading;
