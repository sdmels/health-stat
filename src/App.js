import './App.css';
// import Stats from './components/Stats';

import video1 from './assets/1.mp4';
import video5 from './assets/5.mp4';
import Player from './components/Player';

function App() {
  return (
    <>
      <header>
        <div className='navbar navbar-dark bg-dark box-shadow'>
          <div className='container d-flex justify-content-between'>
            <a href='true' className='navbar-brand d-flex align-items-center'>
              <strong>Health Stats</strong>
            </a>
          </div>
        </div>
      </header>
      <main>
        <section className='jumbotron text-center'>
          <div className='container'>
            <h1 className='jumbotron-heading'>Album example</h1>
            <p className='lead text-muted'>
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don't simply skip over it entirely.
            </p>
            <p>
              <a href='true' className='btn btn-primary my-2 mr-3'>
                Join Conf
              </a>
              <a href='true' className='btn btn-secondary my-2'>
                Stop
              </a>
            </p>
          </div>
        </section>

        <div className='album py-5 bg-light'>
          <div className='container'>
            {/* <Stats /> */}

            <div className='row'>
              <div className='col-md-6'>
                <div className='card mb-6 box-shadow'>
                  <Player url={video5} />

                  <div className='card-body'>
                    <p className='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          View
                        </button>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          Edit
                        </button>
                      </div>
                      <small className='text-muted'>9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='card mb-6 box-shadow'>
                  <Player url={video1} />
                  {/* <video className='bs-card-video' src={video5} loop controls /> */}
                  <div className='card-body'>
                    <p className='card-text'>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div className='btn-group'>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          View
                        </button>
                        <button
                          type='button'
                          className='btn btn-sm btn-outline-secondary'
                        >
                          Edit
                        </button>
                      </div>
                      <small className='text-muted'>9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
