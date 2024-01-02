import React from "react";
import { Link } from "react-router-dom";

export default function EmailInbox() {
  return (
    <div className="main-content">
      <div className="page-content">
        {/* start page title */}
        <div className="page-title-box">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="page-title">
                  <h4>Inbox</h4>
                  <ol className="breadcrumb m-0">
                    <li className="breadcrumb-item">
                      <Link to="">Morvin</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="">Email</Link>
                    </li>
                    <li className="breadcrumb-item active">Inbox</li>
                  </ol>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="float-end d-none d-sm-block">
                  <Link to className="btn btn-success">
                    Add Widget
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end page title */}
        <div className="container-fluid">
          <div className="page-content-wrapper">
            <div className="row">
              <div className="col-12">
                {/* Left sidebar */}
                <div className="email-leftbar card">
                  <button
                    type="button"
                    className="btn btn-danger btn-block waves-effect waves-light"
                  >
                    Compose
                  </button>
                  <div className="mail-list mt-4">
                    <Link to="#" className="active">
                      <i className="mdi mdi-email-outline me-2" /> Inbox{" "}
                      <span className="ms-1 float-end">(18)</span>
                    </Link>
                    <Link to="#">
                      <i className="mdi mdi-star-outline me-2" />
                      Starred
                    </Link>
                    <Link to="#">
                      <i className="mdi mdi-diamond-stone me-2" />
                      Important
                    </Link>
                    <Link to="#">
                      <i className="mdi mdi-file-outline me-2" />
                      Draft
                    </Link>
                    <Link to="#">
                      <i className="mdi mdi-email-check-outline me-2" />
                      Sent Mail
                    </Link>
                    <Link to="#">
                      <i className="mdi mdi-trash-can-outline me-2" />
                      Trash
                    </Link>
                  </div>
                  <h6 className="mt-4">Labels</h6>
                  <div className="mail-list mt-1">
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-info float-end" />
                      Theme Support
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-warning float-end" />
                      Freelance
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-primary float-end" />
                      Social
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-danger float-end" />
                      Friends
                    </Link>
                    <Link to="#">
                      <span className="mdi mdi-arrow-right-drop-circle text-success float-end" />
                      Family
                    </Link>
                  </div>
                  <h6 className="mt-4">Chat</h6>
                  <div className="mt-2">
                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src="assets/images/users/avatar-2.jpg"
                        alt="Generic placeholder image"
                        height={36}
                      />
                      <div className="media-body chat-user-box">
                        <p className="user-title m-0">Scott Median</p>
                        <p className="text-muted">Hello</p>
                      </div>
                    </Link>
                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src="assets/images/users/avatar-3.jpg"
                        alt="Generic placeholder image"
                        height={36}
                      />
                      <div className="media-body chat-user-box">
                        <p className="user-title m-0">Julian Rosa</p>
                        <p className="text-muted">What about our next..</p>
                      </div>
                    </Link>
                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src="assets/images/users/avatar-4.jpg"
                        alt="Generic placeholder image"
                        height={36}
                      />
                      <div className="media-body chat-user-box">
                        <p className="user-title m-0">David Medina</p>
                        <p className="text-muted">Yeah everything is fine</p>
                      </div>
                    </Link>
                    <Link to="#" className="media">
                      <img
                        className="d-flex me-3 rounded-circle"
                        src="assets/images/users/avatar-6.jpg"
                        alt="Generic placeholder image"
                        height={36}
                      />
                      <div className="media-body chat-user-box">
                        <p className="user-title m-0">Jay Baker</p>
                        <p className="text-muted">Wow that's great</p>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* End Left sidebar */}
                {/* Right Sidebar */}
                <div className="email-rightbar mb-3">
                  <div className="card">
                    <div className="btn-toolbar p-3" role="toolbar">
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                        >
                          <i className="fa fa-inbox" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                        >
                          <i className="fa fa-exclamation-circle" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect"
                        >
                          <i className="far fa-trash-alt" />
                        </button>
                      </div>
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-folder" />{" "}
                          <i className="mdi mdi-chevron-down ms-1" />
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="#">
                            Updates
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Social
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Team Manage
                          </Link>
                        </div>
                      </div>
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="fa fa-tag" />{" "}
                          <i className="mdi mdi-chevron-down ms-1" />
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="#">
                            Updates
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Social
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Team Manage
                          </Link>
                        </div>
                      </div>
                      <div className="btn-group me-2 mb-2 mb-sm-0">
                        <button
                          type="button"
                          className="btn btn-primary waves-light waves-effect dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          More <i className="mdi mdi-dots-vertical ms-2" />
                        </button>
                        <div className="dropdown-menu">
                          <Link className="dropdown-item" to="#">
                            Mark as Unread
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Mark as Important
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Add to Tasks
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Add Star
                          </Link>
                          <Link className="dropdown-item" to="#">
                            Mute
                          </Link>
                        </div>
                      </div>
                    </div>
                    <ul className="message-list">
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk19" />
                            <label htmlFor="chk19" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Peter, me (3)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Hello –{" "}
                            <span className="teaser">
                              Trip home from Colombo has been arranged, then
                              Jenna will come get me from Stockholm. :)
                            </span>
                          </Link>
                          <div className="date">Mar 6</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk20" />
                            <label htmlFor="chk20" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            me, Susanna (7)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            <span className="bg-warning badge me-2">
                              Freelance
                            </span>
                            Since you asked... and i'm inconceivably bored at
                            the train station –
                            <span className="teaser">
                              Alright thanks. I'll have to re-book that somehow,
                              i'll get back to you.
                            </span>
                          </Link>
                          <div className="date">Mar. 6</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk6" />
                            <label htmlFor="chk6" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Web Support Dennis
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Re: New mail settings –
                            <span className="teaser">
                              Will you answer him asap?
                            </span>
                          </Link>
                          <div className="date">Mar 7</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk7" />
                            <label htmlFor="chk7" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            me, Peter (2)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            <span className="bg-info badge me-2">Support</span>
                            Off on Thursday -
                            <span className="teaser">
                              Eff that place, you might as well stay here with
                              us instead! Sent from my iPhone 4 4 mar 2014 at
                              5:55 pm
                            </span>
                          </Link>
                          <div className="date">Mar 4</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk8" />
                            <label htmlFor="chk8" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Medium
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            <span className="bg-primary badge me-2">
                              Social
                            </span>
                            This Week's Top Stories –
                            <span className="teaser">
                              Our top pick for you on Medium this week The Man
                              Who Destroyed America’s Ego
                            </span>
                          </Link>
                          <div className="date">Feb 28</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk9" />
                            <label htmlFor="chk9" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Death to Stock
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Montly High-Res Photos –
                            <span className="teaser">
                              To create this month's pack, we hosted a party
                              with local musician Jared Mahone here in Columbus,
                              Ohio.
                            </span>
                          </Link>
                          <div className="date">Feb 28</div>
                        </div>
                      </li>
                      <li className="unread">
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk3" />
                            <label htmlFor="chk3" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Randy, me (5)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            <span className="bg-success badge me-2">
                              Family
                            </span>
                            Last pic over my village –
                            <span className="teaser">
                              Yeah i'd like that! Do you remember the video you
                              showed me of your train ride between Colombo and
                              Kandy? The one with the mountain view? I would
                              love to see that one again!
                            </span>
                          </Link>
                          <div className="date">5:01 am</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk4" />
                            <label htmlFor="chk4" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Andrew Zimmer
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Mochila Beta: Subscription Confirmed –{" "}
                            <span className="teaser">
                              You've been confirmed! Welcome to the ruling class
                              of the inbox. For your records, here is a copy of
                              the information you submitted to us...
                            </span>
                          </Link>
                          <div className="date">Mar 8</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk5" />
                            <label htmlFor="chk5" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Infinity HR
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Sveriges Hetaste sommarjobb –
                            <span className="teaser">
                              Hej Nicklas Sandell! Vi vill bjuda in dig till
                              "First tour 2014", ett rekryteringsevent som
                              erbjuder jobb på 16 semesterorter iSverige.
                            </span>
                          </Link>
                          <div className="date">Mar 8</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk10" />
                            <label htmlFor="chk10" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Revibe
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            <span className="bg-danger badge me-2">
                              Friends
                            </span>
                            Weekend on Revibe –
                            <span className="teaser">
                              Today's Friday and we thought maybe you want some
                              music inspiration for the weekend. Here are some
                              trending tracks and playlists we think you should
                              give a listen!
                            </span>
                          </Link>
                          <div className="date">Feb 27</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk11" />
                            <label htmlFor="chk11" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Erik, me (5)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Regarding our meeting –
                            <span className="teaser">
                              That's great, see you on Thursday!
                            </span>
                          </Link>
                          <div className="date">Feb 24</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk12" />
                            <label htmlFor="chk12" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            KanbanFlow
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            <span className="bg-primary badge me-2">
                              Social
                            </span>
                            Task assigned: Clone ARP's website –{" "}
                            <span className="teaser">
                              You have been assigned a task by Alex@Work on the
                              board Web.
                            </span>
                          </Link>
                          <div className="date">Feb 24</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk13" />
                            <label htmlFor="chk13" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Tobias Berggren
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Let's go fishing! –
                            <span className="teaser">
                              Hey, You wanna join me and Fred at the lake
                              tomorrow? It'll be awesome.
                            </span>
                          </Link>
                          <div className="date">Feb 23</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk14" />
                            <label htmlFor="chk14" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Charukaw, me (7)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Hey man –{" "}
                            <span className="teaser">
                              Nah man sorry i don't. Should i get it?
                            </span>
                          </Link>
                          <div className="date">Feb 23</div>
                        </div>
                      </li>
                      <li className="unread">
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk15" />
                            <label htmlFor="chk15" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            me, Peter (5)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            <span className="bg-info badge me-2">Support</span>
                            Home again! –{" "}
                            <span className="teaser">
                              That's just perfect! See you tomorrow.
                            </span>
                          </Link>
                          <div className="date">Feb 21</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk16" />
                            <label htmlFor="chk16" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Stack Exchange
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            1 new items in your Stackexchange inbox –{" "}
                            <span className="teaser">
                              The following items were added to your Stack
                              Exchange global inbox since you last checked it.
                            </span>
                          </Link>
                          <div className="date">Feb 21</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk17" />
                            <label htmlFor="chk17" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            Google Drive Team
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            You can now use your storage in Google Drive –{" "}
                            <span className="teaser">
                              Hey Nicklas Sandell! Thank you for purchasing
                              extra storage space in Google Drive.
                            </span>
                          </Link>
                          <div className="date">Feb 20</div>
                        </div>
                      </li>
                      <li>
                        <div className="col-mail col-mail-1">
                          <div className="checkbox-wrapper-mail">
                            <input type="checkbox" id="chk18" />
                            <label htmlFor="chk18" className="toggle" />
                          </div>
                          <Link to="#" className="title">
                            me, Susanna (11)
                          </Link>
                          <span className="star-toggle far fa-star" />
                        </div>
                        <div className="col-mail col-mail-2">
                          <Link to="#" className="subject">
                            Train/Bus –{" "}
                            <span className="teaser">
                              Yes ok, great! I'm not stuck in Stockholm anymore,
                              we're making progress.
                            </span>
                          </Link>
                          <div className="date">Feb 19</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-7">Showing 1 - 20 of 1,524</div>
                    <div className="col-5">
                      <div className="btn-group float-end">
                        <button
                          type="button"
                          className="btn btn-sm btn-success waves-effect"
                        >
                          <i className="fa fa-chevron-left" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-success waves-effect"
                        >
                          <i className="fa fa-chevron-right" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
