import React from 'react';

function Blogdetail(props) {
    return (
        <div>
            {/* Header Start */}
            <div className="jumbotron jumbotron-fluid mb-5">
                <div className="container text-center py-5">
                    <h1 className="text-white display-3">Blog Detail</h1>
                    <div className="d-inline-flex align-items-center text-white">
                        <p className="m-0"><a className="text-white" href>Home</a></p>
                        <i className="fa fa-circle px-3" />
                        <p className="m-0">Blog Detail</p>
                    </div>
                </div>
            </div>
            {/* Header End */}
            {/* Blog Start */}
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-8">
                        {/* Blog Detail Start */}
                        <div className="pb-3">
                            <div className="position-relative">
                                <img className="img-fluid w-100" src="img/blog-1.jpg" alt />
                                <div className="position-absolute bg-primary d-flex flex-column align-items-center justify-content-center rounded-circle" style={{ width: 60, height: 60, bottom: '-30px', right: 30 }}>
                                    <h4 className="font-weight-bold mb-n1">01</h4>
                                    <small className="text-white text-uppercase">Jan</small>
                                </div>
                            </div>
                            <div className="bg-secondary mb-3" style={{ padding: 30 }}>
                                <div className="d-flex mb-3">
                                    <div className="d-flex align-items-center">
                                        <img className="rounded-circle" style={{ width: 40, height: 40 }} src="img/user.jpg" alt />
                                        <a className="text-muted ml-2" href>John Doe</a>
                                    </div>
                                    <div className="d-flex align-items-center ml-4">
                                        <i className="far fa-bookmark text-primary" />
                                        <a className="text-muted ml-2" href>Web Design</a>
                                    </div>
                                </div>
                                <h4 className="font-weight-bold mb-3">Kasd tempor diam sea justo dolor</h4>
                                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                    magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                    amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                    sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                    aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                    sit stet no diam kasd vero.</p>
                                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                    vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                    nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                    ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                    clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                    justo dolore sit invidunt.</p>
                                <h4 className="mb-3">Est dolor lorem et ea</h4>
                                <img className="img-fluid w-50 float-left mr-4 mb-2" src="img/blog-1.jpg" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et.</p>
                                <h5 className="mb-3">Est dolor lorem et ea</h5>
                                <img className="img-fluid w-50 float-right ml-4 mb-2" src="img/blog-2.jpg" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                    aliquyam et ut.</p>
                            </div>
                        </div>
                        {/* Blog Detail End */}
                        {/* Comment List Start */}
                        <div className="bg-secondary" style={{ padding: 30, marginBottom: 30 }}>
                            <h3 className="mb-4">3 Comments</h3>
                            <div className="media mb-4">
                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                <div className="media-body">
                                    <h6><a href>John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                        consetetur at sit.</p>
                                    <button className="btn btn-sm btn-light">Reply</button>
                                </div>
                            </div>
                            <div className="media">
                                <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                <div className="media-body">
                                    <h6><a href>John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore
                                        accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.
                                        Gubergren clita aliquyam consetetur sadipscing, at tempor amet ipsum diam tempor
                                        consetetur at sit.</p>
                                    <button className="btn btn-sm btn-light">Reply</button>
                                    <div className="media mt-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: 45 }} />
                                        <div className="media-body">
                                            <h6><a href>John Doe</a> <small><i>01 Jan 2045 at 12:00pm</i></small></h6>
                                            <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                                                labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                                                eirmod ipsum. Gubergren clita aliquyam consetetur sadipscing, at tempor amet
                                                ipsum diam tempor consetetur at sit.</p>
                                            <button className="btn btn-sm btn-light">Reply</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Comment List End */}
                        {/* Comment Form Start */}
                        <div className="bg-secondary mb-3" style={{ padding: 30 }}>
                            <h3 className="mb-4">Leave a comment</h3>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input type="text" className="form-control border-0" id="name" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input type="email" className="form-control border-0" id="email" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="website">Website</label>
                                    <input type="url" className="form-control border-0" id="website" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message *</label>
                                    <textarea id="message" cols={30} rows={5} className="form-control border-0" defaultValue={""} />
                                </div>
                                <div className="form-group mb-0">
                                    <input type="submit" defaultValue="Leave a comment" className="btn btn-primary font-weight-semi-bold py-2 px-3" />
                                </div>
                            </form>
                        </div>
                        {/* Comment Form End */}
                    </div>
                    {/* Sidebar Start */}
                    <div className="col-lg-4 mt-5 mt-lg-0">
                        {/* Search Form Start */}
                        <div className="mb-5">
                            <div className="bg-secondary" style={{ padding: 30 }}>
                                <div className="input-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Keyword" />
                                    <div className="input-group-append">
                                        <span className="input-group-text bg-primary border-primary text-white"><i className="fa fa-search" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Search Form End */}
                        {/* Category Start */}
                        <div className="mb-5">
                            <h3 className="mb-4">Categories</h3>
                            <div className="bg-secondary" style={{ padding: 30 }}>
                                <ul className="list-inline m-0">
                                    <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                                        <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Web Design</a>
                                        <span className="badge badge-secondary badge-pill">150</span>
                                    </li>
                                    <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                                        <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Web Development</a>
                                        <span className="badge badge-secondary badge-pill">131</span>
                                    </li>
                                    <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                                        <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Online Marketing</a>
                                        <span className="badge badge-secondary badge-pill">78</span>
                                    </li>
                                    <li className="mb-1 py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                                        <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Keyword Research</a>
                                        <span className="badge badge-secondary badge-pill">56</span>
                                    </li>
                                    <li className="py-2 px-3 bg-light d-flex justify-content-between align-items-center">
                                        <a className="text-dark" href="#"><i className="fa fa-angle-right text-primary mr-2" />Email Marketing</a>
                                        <span className="badge badge-secondary badge-pill">98</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Category End */}
                        {/* Recent Post Start */}
                        <div className="mb-5">
                            <h3 className="mb-4">Recent Post</h3>
                            <div className="d-flex mb-3">
                                <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3">
                                <img className="img-fluid" src="img/blog-2.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3">
                                <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3">
                                <img className="img-fluid" src="img/blog-2.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                            <div className="d-flex mb-3">
                                <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 80, height: 80, objectFit: 'cover' }} alt />
                                <a href className="d-flex align-items-center bg-secondary text-dark text-decoration-none px-3" style={{ height: 80 }}>
                                    Lorem ipsum dolor sit amet consec adipis elit
                                </a>
                            </div>
                        </div>
                        {/* Recent Post End */}
                        {/* Image Start */}
                        <div className="mb-5">
                            <img src="img/blog-1.jpg" alt className="img-fluid" />
                        </div>
                        {/* Image End */}
                        {/* Tags Start */}
                        <div className="mb-5">
                            <h3 className="mb-4">Tag Cloud</h3>
                            <div className="d-flex flex-wrap m-n1">
                                <a href className="btn btn-secondary m-1">Design</a>
                                <a href className="btn btn-secondary m-1">Development</a>
                                <a href className="btn btn-secondary m-1">Marketing</a>
                                <a href className="btn btn-secondary m-1">SEO</a>
                                <a href className="btn btn-secondary m-1">Writing</a>
                                <a href className="btn btn-secondary m-1">Consulting</a>
                            </div>
                        </div>
                        {/* Tags End */}
                        {/* Image Start */}
                        <div className="mb-5">
                            <img src="img/blog-2.jpg" alt className="img-fluid" />
                        </div>
                        {/* Image End */}
                        {/* Plain Text Start */}
                        <div>
                            <h3 className="mb-4">Plain Text</h3>
                            <div className="bg-secondary text-center" style={{ padding: 30 }}>
                                <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                                <a href className="btn btn-primary py-2 px-4">Read More</a>
                            </div>
                        </div>
                        {/* Plain Text End */}
                    </div>
                    {/* Sidebar End */}
                </div>
            </div>
            {/* Blog End */}
        </div>

    );
}

export default Blogdetail;