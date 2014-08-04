




<!DOCTYPE html>
<html class="   ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>jqTree/prism.js at master · mbraak/jqTree</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="mbraak/jqTree" name="twitter:title" /><meta content="jqTree - Tree widget for jQuery" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/235558?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/235558?v=2&amp;s=400" property="og:image" /><meta content="mbraak/jqTree" property="og:title" /><meta content="https://github.com/mbraak/jqTree" property="og:url" /><meta content="jqTree - Tree widget for jQuery" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="7AB7F2AE:2B99:55AD337:53DFB614" name="octolytics-dimension-request_id" /><meta content="6327881" name="octolytics-actor-id" /><meta content="HarishankarSomasundaram" name="octolytics-actor-login" /><meta content="e11df135aeabf9ff345b814038d899d5f358081de897763a5b4f45c8380019a3" name="octolytics-actor-hash" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="6sECBK8Kai3HVDnQHo/Lnzg5LjBOc2v0lmavnaX834GRC1Kvm7KE6d/Pam+MKJfI9rHHkElPoWgrhLEksnaQ+A==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-8488336393a59083828e685a8702f8734352719a.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-022c3fa33926015b9e04fcd6a447ced7fe84fdd8.css" media="all" rel="stylesheet" type="text/css" />
    


    <meta http-equiv="x-pjax-version" content="aea5b1e796f98188726860c3add4bed4">

      
  <meta name="description" content="jqTree - Tree widget for jQuery">


  <meta content="235558" name="octolytics-dimension-user_id" /><meta content="mbraak" name="octolytics-dimension-user_login" /><meta content="1723712" name="octolytics-dimension-repository_id" /><meta content="mbraak/jqTree" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="1723712" name="octolytics-dimension-repository_network_root_id" /><meta content="mbraak/jqTree" name="octolytics-dimension-repository_network_root_nwo" />

  <link href="https://github.com/mbraak/jqTree/commits/master.atom" rel="alternate" title="Recent Commits to jqTree:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


    
    <a href="/notifications" aria-label="You have no unread notifications" class="notification-indicator tooltipped tooltipped-s" data-hotkey="g n">
        <span class="mail-status all-read"></span>
</a>

      <div class="command-bar js-command-bar  in-repository">
          <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="s, /" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    data-username="HarishankarSomasundaram"
    data-repo="mbraak/jqTree"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="mbraak/jqTree">

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked">
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global">
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
        <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
            <li><a href="https://gist.github.com">Gist</a></li>
            <li><a href="/blog">Blog</a></li>
          <li><a href="https://help.github.com">Help</a></li>
        </ul>
      </div>

    

<ul id="user-links">
  <li>
    <a href="/HarishankarSomasundaram" class="name">
      <img alt="HarishankarSomasundaram" data-user="6327881" height="20" src="https://avatars3.githubusercontent.com/u/6327881?v=2&amp;s=40" width="20" /> HarishankarSomasundaram
    </a>
  </li>

  <li class="new-menu dropdown-toggle js-menu-container">
    <a href="#" class="js-menu-target tooltipped tooltipped-s" aria-label="Create new...">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-arrow"></span>
    </a>

    <div class="new-menu-content js-menu-content">
    </div>
  </li>

  <li>
    <a href="/settings/profile" id="account_settings"
      class="tooltipped tooltipped-s"
      aria-label="Account settings ">
      <span class="octicon octicon-tools"></span>
    </a>
  </li>
  <li>
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="Rw2gwRtKrrn7KxL5nQLi4uyRaQE7erZYtSKSetiQs7H/MOMbU3fqa/cw0QEtrQM5fXYrvxu9gvKCGtARX4cuwg==" /></div>
      <button class="sign-out-button tooltipped tooltipped-s" aria-label="Sign out">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>

<div class="js-new-dropdown-contents hidden">
  

<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="https://porter.github.com/new"><span class="octicon octicon-move-right"></span> Import repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="section-title">
      <span title="mbraak/jqTree">This repository</span>
    </li>
      <li>
        <a href="/mbraak/jqTree/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

</div>


    
  </div>
</div>

      

        



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="38rWmciH3lJxK4rL/f4Qet7K3Ye4Iool/pwHwKvJ1Wd34nR8Veitq70aaJKYKdvxsHOp76YIvyNjYrfy18205g==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="1723712" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/mbraak/jqTree/watchers">
        35
      </a>
      <a href="/mbraak/jqTree/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    

  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/mbraak/jqTree/unstar" class="js-toggler-form starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="YnmTVG+izhx6NDu30Fa6b+Ochi9ng/bE0FYvSLI5F+OtD/dPAZOJYB4p56uBddOwTuLWIcLZgqq9+MHBHn6GqQ==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar mbraak/jqTree">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/mbraak/jqTree/stargazers">
          457
        </a>
</form>
    <form accept-charset="UTF-8" action="/mbraak/jqTree/star" class="js-toggler-form unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="WiaLZlG0xGsuHc5rlfFGxhOri9X/i99q9hZ/vVbjl+U5AF9+L9LfJb250JQhGhnCbutiCOd6uzWPALWJFG2x3A==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star mbraak/jqTree">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/mbraak/jqTree/stargazers">
          457
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/mbraak/jqTree/fork" class="minibutton with-count js-toggler-target fork-button lighter tooltipped-n" title="Fork your own copy of mbraak/jqTree to your account" aria-label="Fork your own copy of mbraak/jqTree to your account" rel="nofollow" data-method="post">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/mbraak/jqTree/network" class="social-count">114</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/mbraak" class="url fn" itemprop="url" rel="author"><span itemprop="title">mbraak</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/mbraak/jqTree" class="js-current-repository js-repo-home-link">jqTree</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders" data-issue-count-url="/mbraak/jqTree/issues/counts">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/mbraak/jqTree" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /mbraak/jqTree">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

        <li class="tooltipped tooltipped-w" aria-label="Issues">
          <a href="/mbraak/jqTree/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /mbraak/jqTree/issues">
            <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
            <span class="js-issue-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>        </li>

      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/mbraak/jqTree/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /mbraak/jqTree/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class="js-pull-replace-counter"></span>
            <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/mbraak/jqTree/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /mbraak/jqTree/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/mbraak/jqTree/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /mbraak/jqTree/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/mbraak/jqTree.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mbraak/jqTree.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><strong>SSH</strong> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="git@github.com:mbraak/jqTree.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="git@github.com:mbraak/jqTree.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/mbraak/jqTree" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/mbraak/jqTree" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>,
      <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>,
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>


  <a href="github-windows://openRepo/https://github.com/mbraak/jqTree" class="minibutton sidebar-button" title="Save mbraak/jqTree to your computer and use it in GitHub Desktop." aria-label="Save mbraak/jqTree to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/mbraak/jqTree/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download mbraak/jqTree as a zip file"
                   title="Download mbraak/jqTree as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<a href="/mbraak/jqTree/blob/347695413caf38df6acee7c2eb8bcc2ab5c8fafb/extra/bower_components/prism/prism.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:40ab1d9bd25e6b6f00dc1b56a47d61c3 -->

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/blob/box-dnd/extra/bower_components/prism/prism.js"
                 data-name="box-dnd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="box-dnd">box-dnd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/blob/dev/extra/bower_components/prism/prism.js"
                 data-name="dev"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="dev">dev</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/blob/gh-pages/extra/bower_components/prism/prism.js"
                 data-name="gh-pages"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="gh-pages">gh-pages</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/blob/master/extra/bower_components/prism/prism.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.21.0/extra/bower_components/prism/prism.js"
                 data-name="0.21.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.21.0">0.21.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.20.0/extra/bower_components/prism/prism.js"
                 data-name="0.20.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.20.0">0.20.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.19.0/extra/bower_components/prism/prism.js"
                 data-name="0.19.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.19.0">0.19.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.18.0/extra/bower_components/prism/prism.js"
                 data-name="0.18.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.18.0">0.18.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.17.0/extra/bower_components/prism/prism.js"
                 data-name="0.17.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.17.0">0.17.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.16.0/extra/bower_components/prism/prism.js"
                 data-name="0.16.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.16.0">0.16.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.15.0/extra/bower_components/prism/prism.js"
                 data-name="0.15.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.15.0">0.15.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.15/extra/bower_components/prism/prism.js"
                 data-name="0.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.15">0.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.14.2/extra/bower_components/prism/prism.js"
                 data-name="0.14.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.2">0.14.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.14.1/extra/bower_components/prism/prism.js"
                 data-name="0.14.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14.1">0.14.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.14/extra/bower_components/prism/prism.js"
                 data-name="0.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.14">0.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.13/extra/bower_components/prism/prism.js"
                 data-name="0.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.13">0.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.12/extra/bower_components/prism/prism.js"
                 data-name="0.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.12">0.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.11/extra/bower_components/prism/prism.js"
                 data-name="0.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.11">0.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.10/extra/bower_components/prism/prism.js"
                 data-name="0.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.10">0.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.9/extra/bower_components/prism/prism.js"
                 data-name="0.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.9">0.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.8/extra/bower_components/prism/prism.js"
                 data-name="0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.8">0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.7/extra/bower_components/prism/prism.js"
                 data-name="0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.7">0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.6/extra/bower_components/prism/prism.js"
                 data-name="0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.6">0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.5/extra/bower_components/prism/prism.js"
                 data-name="0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.5">0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.4/extra/bower_components/prism/prism.js"
                 data-name="0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.4">0.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.3/extra/bower_components/prism/prism.js"
                 data-name="0.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.3">0.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.2/extra/bower_components/prism/prism.js"
                 data-name="0.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2">0.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/mbraak/jqTree/tree/0.1/extra/bower_components/prism/prism.js"
                 data-name="0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1">0.1</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/mbraak/jqTree/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="extra/bower_components/prism/prism.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbraak/jqTree" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">jqTree</span></a></span></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbraak/jqTree/tree/master/extra" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">extra</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbraak/jqTree/tree/master/extra/bower_components" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bower_components</span></a></span><span class="separator"> / </span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/mbraak/jqTree/tree/master/extra/bower_components/prism" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">prism</span></a></span><span class="separator"> / </span><strong class="final-path">prism.js</strong>
  </div>
</div>


  <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/mbraak/jqTree/contributors/master/extra/bower_components/prism/prism.js">
    Fetching contributors…

    <div class="participation">
      <p class="loader-loading"><img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" /></p>
      <p class="loader-error">Cannot retrieve contributors at this time</p>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>558 lines (430 sloc)</span>
          <span class="meta-divider"></span>
        <span>12.765 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/mbraak/jqTree/raw/master/extra/bower_components/prism/prism.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/mbraak/jqTree/blame/master/extra/bower_components/prism/prism.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/mbraak/jqTree/commits/master/extra/bower_components/prism/prism.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw"
             href="github-windows://openRepo/https://github.com/mbraak/jqTree?branch=master&amp;filepath=extra%2Fbower_components%2Fprism%2Fprism.js" aria-label="Open this file in GitHub for Windows">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/mbraak/jqTree/edit/master/extra/bower_components/prism/prism.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/mbraak/jqTree/delete/master/extra/bower_components/prism/prism.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
      
  <div class="blob-wrapper data type-javascript">
       <table class="file-code file-diff tab-size-8">
         <tr class="file-code-line">
           <td class="blob-line-nums">
             <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>

           </td>
           <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><br></div><div class='line' id='LC2'><br></div><div class='line' id='LC3'><span class="cm">/* **********************************************</span></div><div class='line' id='LC4'><span class="cm">     Begin prism-core.js</span></div><div class='line' id='LC5'><span class="cm">********************************************** */</span></div><div class='line' id='LC6'><br></div><div class='line' id='LC7'><span class="cm">/**</span></div><div class='line' id='LC8'><span class="cm"> * Prism: Lightweight, robust, elegant syntax highlighting</span></div><div class='line' id='LC9'><span class="cm"> * MIT license http://www.opensource.org/licenses/mit-license.php/</span></div><div class='line' id='LC10'><span class="cm"> * @author Lea Verou http://lea.verou.me</span></div><div class='line' id='LC11'><span class="cm"> */</span></div><div class='line' id='LC12'><br></div><div class='line' id='LC13'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC14'><br></div><div class='line' id='LC15'><span class="c1">// Private helper vars</span></div><div class='line' id='LC16'><span class="kd">var</span> <span class="nx">lang</span> <span class="o">=</span> <span class="sr">/\blang(?:uage)?-(?!\*)(\w+)\b/i</span><span class="p">;</span></div><div class='line' id='LC17'><br></div><div class='line' id='LC18'><span class="kd">var</span> <span class="nx">_</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">Prism</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC19'>	<span class="nx">util</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC20'>		<span class="nx">type</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span> </div><div class='line' id='LC21'>			<span class="k">return</span> <span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">o</span><span class="p">).</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\[object (\w+)\]/</span><span class="p">)[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC22'>		<span class="p">},</span></div><div class='line' id='LC23'><br></div><div class='line' id='LC24'>		<span class="c1">// Deep clone a language definition (e.g. to extend it)</span></div><div class='line' id='LC25'>		<span class="nx">clone</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC26'>			<span class="kd">var</span> <span class="nx">type</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nx">o</span><span class="p">);</span></div><div class='line' id='LC27'><br></div><div class='line' id='LC28'>			<span class="k">switch</span> <span class="p">(</span><span class="nx">type</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC29'>				<span class="k">case</span> <span class="s1">&#39;Object&#39;</span><span class="o">:</span></div><div class='line' id='LC30'>					<span class="kd">var</span> <span class="nx">clone</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC31'><br></div><div class='line' id='LC32'>					<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC33'>						<span class="k">if</span> <span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC34'>							<span class="nx">clone</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">key</span><span class="p">]);</span></div><div class='line' id='LC35'>						<span class="p">}</span></div><div class='line' id='LC36'>					<span class="p">}</span></div><div class='line' id='LC37'><br></div><div class='line' id='LC38'>					<span class="k">return</span> <span class="nx">clone</span><span class="p">;</span></div><div class='line' id='LC39'><br></div><div class='line' id='LC40'>				<span class="k">case</span> <span class="s1">&#39;Array&#39;</span><span class="o">:</span></div><div class='line' id='LC41'>					<span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nx">slice</span><span class="p">();</span></div><div class='line' id='LC42'>			<span class="p">}</span></div><div class='line' id='LC43'><br></div><div class='line' id='LC44'>			<span class="k">return</span> <span class="nx">o</span><span class="p">;</span></div><div class='line' id='LC45'>		<span class="p">}</span></div><div class='line' id='LC46'>	<span class="p">},</span></div><div class='line' id='LC47'><br></div><div class='line' id='LC48'>	<span class="nx">languages</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC49'>		<span class="nx">extend</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">id</span><span class="p">,</span> <span class="nx">redef</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC50'>			<span class="kd">var</span> <span class="nx">lang</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">clone</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">languages</span><span class="p">[</span><span class="nx">id</span><span class="p">]);</span></div><div class='line' id='LC51'><br></div><div class='line' id='LC52'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">redef</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC53'>				<span class="nx">lang</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">redef</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC54'>			<span class="p">}</span></div><div class='line' id='LC55'><br></div><div class='line' id='LC56'>			<span class="k">return</span> <span class="nx">lang</span><span class="p">;</span></div><div class='line' id='LC57'>		<span class="p">},</span></div><div class='line' id='LC58'><br></div><div class='line' id='LC59'>		<span class="c1">// Insert a token before another token in a language literal</span></div><div class='line' id='LC60'>		<span class="nx">insertBefore</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">inside</span><span class="p">,</span> <span class="nx">before</span><span class="p">,</span> <span class="nx">insert</span><span class="p">,</span> <span class="nx">root</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC61'>			<span class="nx">root</span> <span class="o">=</span> <span class="nx">root</span> <span class="o">||</span> <span class="nx">_</span><span class="p">.</span><span class="nx">languages</span><span class="p">;</span></div><div class='line' id='LC62'>			<span class="kd">var</span> <span class="nx">grammar</span> <span class="o">=</span> <span class="nx">root</span><span class="p">[</span><span class="nx">inside</span><span class="p">];</span></div><div class='line' id='LC63'>			<span class="kd">var</span> <span class="nx">ret</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC64'><br></div><div class='line' id='LC65'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">token</span> <span class="k">in</span> <span class="nx">grammar</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC66'><br></div><div class='line' id='LC67'>				<span class="k">if</span> <span class="p">(</span><span class="nx">grammar</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">token</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC68'><br></div><div class='line' id='LC69'>					<span class="k">if</span> <span class="p">(</span><span class="nx">token</span> <span class="o">==</span> <span class="nx">before</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC70'><br></div><div class='line' id='LC71'>						<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">newToken</span> <span class="k">in</span> <span class="nx">insert</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'><br></div><div class='line' id='LC73'>							<span class="k">if</span> <span class="p">(</span><span class="nx">insert</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">newToken</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC74'>								<span class="nx">ret</span><span class="p">[</span><span class="nx">newToken</span><span class="p">]</span> <span class="o">=</span> <span class="nx">insert</span><span class="p">[</span><span class="nx">newToken</span><span class="p">];</span></div><div class='line' id='LC75'>							<span class="p">}</span></div><div class='line' id='LC76'>						<span class="p">}</span></div><div class='line' id='LC77'>					<span class="p">}</span></div><div class='line' id='LC78'><br></div><div class='line' id='LC79'>					<span class="nx">ret</span><span class="p">[</span><span class="nx">token</span><span class="p">]</span> <span class="o">=</span> <span class="nx">grammar</span><span class="p">[</span><span class="nx">token</span><span class="p">];</span></div><div class='line' id='LC80'>				<span class="p">}</span></div><div class='line' id='LC81'>			<span class="p">}</span></div><div class='line' id='LC82'><br></div><div class='line' id='LC83'>			<span class="k">return</span> <span class="nx">root</span><span class="p">[</span><span class="nx">inside</span><span class="p">]</span> <span class="o">=</span> <span class="nx">ret</span><span class="p">;</span></div><div class='line' id='LC84'>		<span class="p">},</span></div><div class='line' id='LC85'><br></div><div class='line' id='LC86'>		<span class="c1">// Traverse a language definition with Depth First Search</span></div><div class='line' id='LC87'>		<span class="nx">DFS</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC88'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="k">in</span> <span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>				<span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">i</span><span class="p">,</span> <span class="nx">o</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span></div><div class='line' id='LC90'><br></div><div class='line' id='LC91'>				<span class="k">if</span> <span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">util</span><span class="p">.</span><span class="nx">type</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;Object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>					<span class="nx">_</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">DFS</span><span class="p">(</span><span class="nx">o</span><span class="p">[</span><span class="nx">i</span><span class="p">],</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC93'>				<span class="p">}</span></div><div class='line' id='LC94'>			<span class="p">}</span></div><div class='line' id='LC95'>		<span class="p">}</span></div><div class='line' id='LC96'>	<span class="p">},</span></div><div class='line' id='LC97'><br></div><div class='line' id='LC98'>	<span class="nx">highlightAll</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">async</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC99'>		<span class="kd">var</span> <span class="nx">elements</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s1">&#39;code[class*=&quot;language-&quot;], [class*=&quot;language-&quot;] code, code[class*=&quot;lang-&quot;], [class*=&quot;lang-&quot;] code&#39;</span><span class="p">);</span></div><div class='line' id='LC100'><br></div><div class='line' id='LC101'>		<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="nx">element</span><span class="p">;</span> <span class="nx">element</span> <span class="o">=</span> <span class="nx">elements</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">];)</span> <span class="p">{</span></div><div class='line' id='LC102'>			<span class="nx">_</span><span class="p">.</span><span class="nx">highlightElement</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">async</span> <span class="o">===</span> <span class="kc">true</span><span class="p">,</span> <span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC103'>		<span class="p">}</span></div><div class='line' id='LC104'>	<span class="p">},</span></div><div class='line' id='LC105'><br></div><div class='line' id='LC106'>	<span class="nx">highlightElement</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">async</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC107'>		<span class="c1">// Find language</span></div><div class='line' id='LC108'>		<span class="kd">var</span> <span class="nx">language</span><span class="p">,</span> <span class="nx">grammar</span><span class="p">,</span> <span class="nx">parent</span> <span class="o">=</span> <span class="nx">element</span><span class="p">;</span></div><div class='line' id='LC109'><br></div><div class='line' id='LC110'>		<span class="k">while</span> <span class="p">(</span><span class="nx">parent</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">lang</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">parent</span><span class="p">.</span><span class="nx">className</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC111'>			<span class="nx">parent</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></div><div class='line' id='LC112'>		<span class="p">}</span></div><div class='line' id='LC113'><br></div><div class='line' id='LC114'>		<span class="k">if</span> <span class="p">(</span><span class="nx">parent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC115'>			<span class="nx">language</span> <span class="o">=</span> <span class="p">(</span><span class="nx">parent</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">lang</span><span class="p">)</span> <span class="o">||</span> <span class="p">[,</span><span class="s1">&#39;&#39;</span><span class="p">])[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC116'>			<span class="nx">grammar</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">languages</span><span class="p">[</span><span class="nx">language</span><span class="p">];</span></div><div class='line' id='LC117'>		<span class="p">}</span></div><div class='line' id='LC118'><br></div><div class='line' id='LC119'>		<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">grammar</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC120'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC121'>		<span class="p">}</span></div><div class='line' id='LC122'><br></div><div class='line' id='LC123'>		<span class="c1">// Set language on the element, if not present</span></div><div class='line' id='LC124'>		<span class="nx">element</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">lang</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; language-&#39;</span> <span class="o">+</span> <span class="nx">language</span><span class="p">;</span></div><div class='line' id='LC125'><br></div><div class='line' id='LC126'>		<span class="c1">// Set language on the parent, for styling</span></div><div class='line' id='LC127'>		<span class="nx">parent</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span></div><div class='line' id='LC128'><br></div><div class='line' id='LC129'>		<span class="k">if</span> <span class="p">(</span><span class="sr">/pre/i</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">parent</span><span class="p">.</span><span class="nx">nodeName</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC130'>			<span class="nx">parent</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="nx">parent</span><span class="p">.</span><span class="nx">className</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">lang</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\s+/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; language-&#39;</span> <span class="o">+</span> <span class="nx">language</span><span class="p">;</span> </div><div class='line' id='LC131'>		<span class="p">}</span></div><div class='line' id='LC132'><br></div><div class='line' id='LC133'>		<span class="kd">var</span> <span class="nx">code</span> <span class="o">=</span> <span class="nx">element</span><span class="p">.</span><span class="nx">textContent</span><span class="p">;</span></div><div class='line' id='LC134'><br></div><div class='line' id='LC135'>		<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">code</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC136'>			<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC137'>		<span class="p">}</span></div><div class='line' id='LC138'><br></div><div class='line' id='LC139'>		<span class="nx">code</span> <span class="o">=</span> <span class="nx">code</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;amp;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&lt;/g</span><span class="p">,</span> <span class="s1">&#39;&amp;lt;&#39;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\u00a0/g</span><span class="p">,</span> <span class="s1">&#39; &#39;</span><span class="p">);</span></div><div class='line' id='LC140'><br></div><div class='line' id='LC141'>		<span class="kd">var</span> <span class="nx">env</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC142'>			<span class="nx">element</span><span class="o">:</span> <span class="nx">element</span><span class="p">,</span></div><div class='line' id='LC143'>			<span class="nx">language</span><span class="o">:</span> <span class="nx">language</span><span class="p">,</span></div><div class='line' id='LC144'>			<span class="nx">grammar</span><span class="o">:</span> <span class="nx">grammar</span><span class="p">,</span></div><div class='line' id='LC145'>			<span class="nx">code</span><span class="o">:</span> <span class="nx">code</span></div><div class='line' id='LC146'>		<span class="p">};</span></div><div class='line' id='LC147'><br></div><div class='line' id='LC148'>		<span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">run</span><span class="p">(</span><span class="s1">&#39;before-highlight&#39;</span><span class="p">,</span> <span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC149'><br></div><div class='line' id='LC150'>		<span class="k">if</span> <span class="p">(</span><span class="nx">async</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">Worker</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC151'>			<span class="kd">var</span> <span class="nx">worker</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Worker</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">filename</span><span class="p">);</span>	</div><div class='line' id='LC152'><br></div><div class='line' id='LC153'>			<span class="nx">worker</span><span class="p">.</span><span class="nx">onmessage</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>				<span class="nx">env</span><span class="p">.</span><span class="nx">highlightedCode</span> <span class="o">=</span> <span class="nx">Token</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">data</span><span class="p">),</span> <span class="nx">language</span><span class="p">);</span></div><div class='line' id='LC155'><br></div><div class='line' id='LC156'>				<span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">run</span><span class="p">(</span><span class="s1">&#39;before-insert&#39;</span><span class="p">,</span> <span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC157'><br></div><div class='line' id='LC158'>				<span class="nx">env</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">env</span><span class="p">.</span><span class="nx">highlightedCode</span><span class="p">;</span></div><div class='line' id='LC159'><br></div><div class='line' id='LC160'>				<span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">env</span><span class="p">.</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC161'>				<span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">run</span><span class="p">(</span><span class="s1">&#39;after-highlight&#39;</span><span class="p">,</span> <span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC162'>			<span class="p">};</span></div><div class='line' id='LC163'><br></div><div class='line' id='LC164'>			<span class="nx">worker</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">({</span></div><div class='line' id='LC165'>				<span class="nx">language</span><span class="o">:</span> <span class="nx">env</span><span class="p">.</span><span class="nx">language</span><span class="p">,</span></div><div class='line' id='LC166'>				<span class="nx">code</span><span class="o">:</span> <span class="nx">env</span><span class="p">.</span><span class="nx">code</span></div><div class='line' id='LC167'>			<span class="p">}));</span></div><div class='line' id='LC168'>		<span class="p">}</span></div><div class='line' id='LC169'>		<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC170'>			<span class="nx">env</span><span class="p">.</span><span class="nx">highlightedCode</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">highlight</span><span class="p">(</span><span class="nx">env</span><span class="p">.</span><span class="nx">code</span><span class="p">,</span> <span class="nx">env</span><span class="p">.</span><span class="nx">grammar</span><span class="p">,</span> <span class="nx">env</span><span class="p">.</span><span class="nx">language</span><span class="p">)</span></div><div class='line' id='LC171'><br></div><div class='line' id='LC172'>			<span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">run</span><span class="p">(</span><span class="s1">&#39;before-insert&#39;</span><span class="p">,</span> <span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC173'><br></div><div class='line' id='LC174'>			<span class="nx">env</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">innerHTML</span> <span class="o">=</span> <span class="nx">env</span><span class="p">.</span><span class="nx">highlightedCode</span><span class="p">;</span></div><div class='line' id='LC175'><br></div><div class='line' id='LC176'>			<span class="nx">callback</span> <span class="o">&amp;&amp;</span> <span class="nx">callback</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">element</span><span class="p">);</span></div><div class='line' id='LC177'><br></div><div class='line' id='LC178'>			<span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">run</span><span class="p">(</span><span class="s1">&#39;after-highlight&#39;</span><span class="p">,</span> <span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC179'>		<span class="p">}</span></div><div class='line' id='LC180'>	<span class="p">},</span></div><div class='line' id='LC181'><br></div><div class='line' id='LC182'>	<span class="nx">highlight</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">grammar</span><span class="p">,</span> <span class="nx">language</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC183'>		<span class="k">return</span> <span class="nx">Token</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">tokenize</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">grammar</span><span class="p">),</span> <span class="nx">language</span><span class="p">);</span></div><div class='line' id='LC184'>	<span class="p">},</span></div><div class='line' id='LC185'><br></div><div class='line' id='LC186'>	<span class="nx">tokenize</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">grammar</span><span class="p">,</span> <span class="nx">language</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC187'>		<span class="kd">var</span> <span class="nx">Token</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">Token</span><span class="p">;</span></div><div class='line' id='LC188'><br></div><div class='line' id='LC189'>		<span class="kd">var</span> <span class="nx">strarr</span> <span class="o">=</span> <span class="p">[</span><span class="nx">text</span><span class="p">];</span></div><div class='line' id='LC190'><br></div><div class='line' id='LC191'>		<span class="kd">var</span> <span class="nx">rest</span> <span class="o">=</span> <span class="nx">grammar</span><span class="p">.</span><span class="nx">rest</span><span class="p">;</span></div><div class='line' id='LC192'><br></div><div class='line' id='LC193'>		<span class="k">if</span> <span class="p">(</span><span class="nx">rest</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC194'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">token</span> <span class="k">in</span> <span class="nx">rest</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC195'>				<span class="nx">grammar</span><span class="p">[</span><span class="nx">token</span><span class="p">]</span> <span class="o">=</span> <span class="nx">rest</span><span class="p">[</span><span class="nx">token</span><span class="p">];</span></div><div class='line' id='LC196'>			<span class="p">}</span></div><div class='line' id='LC197'><br></div><div class='line' id='LC198'>			<span class="k">delete</span> <span class="nx">grammar</span><span class="p">.</span><span class="nx">rest</span><span class="p">;</span></div><div class='line' id='LC199'>		<span class="p">}</span></div><div class='line' id='LC200'><br></div><div class='line' id='LC201'>		<span class="nx">tokenloop</span><span class="o">:</span> <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">token</span> <span class="k">in</span> <span class="nx">grammar</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC202'>			<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">grammar</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">(</span><span class="nx">token</span><span class="p">)</span> <span class="o">||</span> <span class="o">!</span><span class="nx">grammar</span><span class="p">[</span><span class="nx">token</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC203'>				<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC204'>			<span class="p">}</span></div><div class='line' id='LC205'><br></div><div class='line' id='LC206'>			<span class="kd">var</span> <span class="nx">pattern</span> <span class="o">=</span> <span class="nx">grammar</span><span class="p">[</span><span class="nx">token</span><span class="p">],</span> </div><div class='line' id='LC207'>				<span class="nx">inside</span> <span class="o">=</span> <span class="nx">pattern</span><span class="p">.</span><span class="nx">inside</span><span class="p">,</span></div><div class='line' id='LC208'>				<span class="nx">lookbehind</span> <span class="o">=</span> <span class="o">!!</span><span class="nx">pattern</span><span class="p">.</span><span class="nx">lookbehind</span><span class="p">,</span></div><div class='line' id='LC209'>				<span class="nx">lookbehindLength</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC210'><br></div><div class='line' id='LC211'>			<span class="nx">pattern</span> <span class="o">=</span> <span class="nx">pattern</span><span class="p">.</span><span class="nx">pattern</span> <span class="o">||</span> <span class="nx">pattern</span><span class="p">;</span></div><div class='line' id='LC212'><br></div><div class='line' id='LC213'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span> <span class="nx">i</span><span class="o">&lt;</span><span class="nx">strarr</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span> <span class="c1">// Don’t cache length as it changes during the loop</span></div><div class='line' id='LC214'><br></div><div class='line' id='LC215'>				<span class="kd">var</span> <span class="nx">str</span> <span class="o">=</span> <span class="nx">strarr</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC216'><br></div><div class='line' id='LC217'>				<span class="k">if</span> <span class="p">(</span><span class="nx">strarr</span><span class="p">.</span><span class="nx">length</span> <span class="o">&gt;</span> <span class="nx">text</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC218'>					<span class="c1">// Something went terribly wrong, ABORT, ABORT!</span></div><div class='line' id='LC219'>					<span class="k">break</span> <span class="nx">tokenloop</span><span class="p">;</span></div><div class='line' id='LC220'>				<span class="p">}</span></div><div class='line' id='LC221'><br></div><div class='line' id='LC222'>				<span class="k">if</span> <span class="p">(</span><span class="nx">str</span> <span class="k">instanceof</span> <span class="nx">Token</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC223'>					<span class="k">continue</span><span class="p">;</span></div><div class='line' id='LC224'>				<span class="p">}</span></div><div class='line' id='LC225'><br></div><div class='line' id='LC226'>				<span class="nx">pattern</span><span class="p">.</span><span class="nx">lastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC227'><br></div><div class='line' id='LC228'>				<span class="kd">var</span> <span class="nx">match</span> <span class="o">=</span> <span class="nx">pattern</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">str</span><span class="p">);</span></div><div class='line' id='LC229'><br></div><div class='line' id='LC230'>				<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC231'>					<span class="k">if</span><span class="p">(</span><span class="nx">lookbehind</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC232'>						<span class="nx">lookbehindLength</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">].</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC233'>					<span class="p">}</span></div><div class='line' id='LC234'><br></div><div class='line' id='LC235'>					<span class="kd">var</span> <span class="nx">from</span> <span class="o">=</span> <span class="nx">match</span><span class="p">.</span><span class="nx">index</span> <span class="o">-</span> <span class="mi">1</span> <span class="o">+</span> <span class="nx">lookbehindLength</span><span class="p">,</span></div><div class='line' id='LC236'>					    <span class="nx">match</span> <span class="o">=</span> <span class="nx">match</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">slice</span><span class="p">(</span><span class="nx">lookbehindLength</span><span class="p">),</span></div><div class='line' id='LC237'>					    <span class="nx">len</span> <span class="o">=</span> <span class="nx">match</span><span class="p">.</span><span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC238'>					    <span class="nx">to</span> <span class="o">=</span> <span class="nx">from</span> <span class="o">+</span> <span class="nx">len</span><span class="p">,</span></div><div class='line' id='LC239'>						<span class="nx">before</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span> <span class="nx">from</span> <span class="o">+</span> <span class="mi">1</span><span class="p">),</span></div><div class='line' id='LC240'>						<span class="nx">after</span> <span class="o">=</span> <span class="nx">str</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="nx">to</span> <span class="o">+</span> <span class="mi">1</span><span class="p">);</span> </div><div class='line' id='LC241'><br></div><div class='line' id='LC242'>					<span class="kd">var</span> <span class="nx">args</span> <span class="o">=</span> <span class="p">[</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC243'><br></div><div class='line' id='LC244'>					<span class="k">if</span> <span class="p">(</span><span class="nx">before</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC245'>						<span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">before</span><span class="p">);</span></div><div class='line' id='LC246'>					<span class="p">}</span></div><div class='line' id='LC247'><br></div><div class='line' id='LC248'>					<span class="kd">var</span> <span class="nx">wrapped</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Token</span><span class="p">(</span><span class="nx">token</span><span class="p">,</span> <span class="nx">inside</span><span class="o">?</span> <span class="nx">_</span><span class="p">.</span><span class="nx">tokenize</span><span class="p">(</span><span class="nx">match</span><span class="p">,</span> <span class="nx">inside</span><span class="p">)</span> <span class="o">:</span> <span class="nx">match</span><span class="p">);</span></div><div class='line' id='LC249'><br></div><div class='line' id='LC250'>					<span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">wrapped</span><span class="p">);</span></div><div class='line' id='LC251'><br></div><div class='line' id='LC252'>					<span class="k">if</span> <span class="p">(</span><span class="nx">after</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>						<span class="nx">args</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">after</span><span class="p">);</span></div><div class='line' id='LC254'>					<span class="p">}</span></div><div class='line' id='LC255'><br></div><div class='line' id='LC256'>					<span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">splice</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">strarr</span><span class="p">,</span> <span class="nx">args</span><span class="p">);</span></div><div class='line' id='LC257'>				<span class="p">}</span></div><div class='line' id='LC258'>			<span class="p">}</span></div><div class='line' id='LC259'>		<span class="p">}</span></div><div class='line' id='LC260'><br></div><div class='line' id='LC261'>		<span class="k">return</span> <span class="nx">strarr</span><span class="p">;</span></div><div class='line' id='LC262'>	<span class="p">},</span></div><div class='line' id='LC263'><br></div><div class='line' id='LC264'>	<span class="nx">hooks</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC265'>		<span class="nx">all</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC266'><br></div><div class='line' id='LC267'>		<span class="nx">add</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">callback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC268'>			<span class="kd">var</span> <span class="nx">hooks</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">all</span><span class="p">;</span></div><div class='line' id='LC269'><br></div><div class='line' id='LC270'>			<span class="nx">hooks</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">hooks</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC271'><br></div><div class='line' id='LC272'>			<span class="nx">hooks</span><span class="p">[</span><span class="nx">name</span><span class="p">].</span><span class="nx">push</span><span class="p">(</span><span class="nx">callback</span><span class="p">);</span></div><div class='line' id='LC273'>		<span class="p">},</span></div><div class='line' id='LC274'><br></div><div class='line' id='LC275'>		<span class="nx">run</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">env</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC276'>			<span class="kd">var</span> <span class="nx">callbacks</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">all</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC277'><br></div><div class='line' id='LC278'>			<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">callbacks</span> <span class="o">||</span> <span class="o">!</span><span class="nx">callbacks</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC279'>				<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC280'>			<span class="p">}</span></div><div class='line' id='LC281'><br></div><div class='line' id='LC282'>			<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span> <span class="nx">callback</span><span class="p">;</span> <span class="nx">callback</span> <span class="o">=</span> <span class="nx">callbacks</span><span class="p">[</span><span class="nx">i</span><span class="o">++</span><span class="p">];)</span> <span class="p">{</span></div><div class='line' id='LC283'>				<span class="nx">callback</span><span class="p">(</span><span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC284'>			<span class="p">}</span></div><div class='line' id='LC285'>		<span class="p">}</span></div><div class='line' id='LC286'>	<span class="p">}</span></div><div class='line' id='LC287'><span class="p">};</span></div><div class='line' id='LC288'><br></div><div class='line' id='LC289'><span class="kd">var</span> <span class="nx">Token</span> <span class="o">=</span> <span class="nx">_</span><span class="p">.</span><span class="nx">Token</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">type</span><span class="p">,</span> <span class="nx">content</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC290'>	<span class="k">this</span><span class="p">.</span><span class="nx">type</span> <span class="o">=</span> <span class="nx">type</span><span class="p">;</span></div><div class='line' id='LC291'>	<span class="k">this</span><span class="p">.</span><span class="nx">content</span> <span class="o">=</span> <span class="nx">content</span><span class="p">;</span></div><div class='line' id='LC292'><span class="p">};</span></div><div class='line' id='LC293'><br></div><div class='line' id='LC294'><span class="nx">Token</span><span class="p">.</span><span class="nx">stringify</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">,</span> <span class="nx">language</span><span class="p">,</span> <span class="nx">parent</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC295'>	<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">o</span> <span class="o">==</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC296'>		<span class="k">return</span> <span class="nx">o</span><span class="p">;</span></div><div class='line' id='LC297'>	<span class="p">}</span></div><div class='line' id='LC298'><br></div><div class='line' id='LC299'>	<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="o">==</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>		<span class="k">return</span> <span class="nx">o</span><span class="p">.</span><span class="nx">map</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC301'>			<span class="k">return</span> <span class="nx">Token</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">element</span><span class="p">,</span> <span class="nx">language</span><span class="p">,</span> <span class="nx">o</span><span class="p">);</span></div><div class='line' id='LC302'>		<span class="p">}).</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC303'>	<span class="p">}</span></div><div class='line' id='LC304'><br></div><div class='line' id='LC305'>	<span class="kd">var</span> <span class="nx">env</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC306'>		<span class="nx">type</span><span class="o">:</span> <span class="nx">o</span><span class="p">.</span><span class="nx">type</span><span class="p">,</span></div><div class='line' id='LC307'>		<span class="nx">content</span><span class="o">:</span> <span class="nx">Token</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">content</span><span class="p">,</span> <span class="nx">language</span><span class="p">,</span> <span class="nx">parent</span><span class="p">),</span></div><div class='line' id='LC308'>		<span class="nx">tag</span><span class="o">:</span> <span class="s1">&#39;span&#39;</span><span class="p">,</span></div><div class='line' id='LC309'>		<span class="nx">classes</span><span class="o">:</span> <span class="p">[</span><span class="s1">&#39;token&#39;</span><span class="p">,</span> <span class="nx">o</span><span class="p">.</span><span class="nx">type</span><span class="p">],</span></div><div class='line' id='LC310'>		<span class="nx">attributes</span><span class="o">:</span> <span class="p">{},</span></div><div class='line' id='LC311'>		<span class="nx">language</span><span class="o">:</span> <span class="nx">language</span><span class="p">,</span></div><div class='line' id='LC312'>		<span class="nx">parent</span><span class="o">:</span> <span class="nx">parent</span></div><div class='line' id='LC313'>	<span class="p">};</span></div><div class='line' id='LC314'><br></div><div class='line' id='LC315'>	<span class="k">if</span> <span class="p">(</span><span class="nx">env</span><span class="p">.</span><span class="nx">type</span> <span class="o">==</span> <span class="s1">&#39;comment&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>		<span class="nx">env</span><span class="p">.</span><span class="nx">attributes</span><span class="p">[</span><span class="s1">&#39;spellcheck&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="s1">&#39;true&#39;</span><span class="p">;</span></div><div class='line' id='LC317'>	<span class="p">}</span></div><div class='line' id='LC318'><br></div><div class='line' id='LC319'>	<span class="nx">_</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">run</span><span class="p">(</span><span class="s1">&#39;wrap&#39;</span><span class="p">,</span> <span class="nx">env</span><span class="p">);</span></div><div class='line' id='LC320'><br></div><div class='line' id='LC321'>	<span class="kd">var</span> <span class="nx">attributes</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC322'><br></div><div class='line' id='LC323'>	<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">name</span> <span class="k">in</span> <span class="nx">env</span><span class="p">.</span><span class="nx">attributes</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC324'>		<span class="nx">attributes</span> <span class="o">+=</span> <span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;=&quot;&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="nx">env</span><span class="p">.</span><span class="nx">attributes</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></div><div class='line' id='LC325'>	<span class="p">}</span></div><div class='line' id='LC326'><br></div><div class='line' id='LC327'>	<span class="k">return</span> <span class="s1">&#39;&lt;&#39;</span> <span class="o">+</span> <span class="nx">env</span><span class="p">.</span><span class="nx">tag</span> <span class="o">+</span> <span class="s1">&#39; class=&quot;&#39;</span> <span class="o">+</span> <span class="nx">env</span><span class="p">.</span><span class="nx">classes</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39; &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;&quot; &#39;</span> <span class="o">+</span> <span class="nx">attributes</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span> <span class="o">+</span> <span class="nx">env</span><span class="p">.</span><span class="nx">content</span> <span class="o">+</span> <span class="s1">&#39;&lt;/&#39;</span> <span class="o">+</span> <span class="nx">env</span><span class="p">.</span><span class="nx">tag</span> <span class="o">+</span> <span class="s1">&#39;&gt;&#39;</span><span class="p">;</span></div><div class='line' id='LC328'><br></div><div class='line' id='LC329'><span class="p">};</span></div><div class='line' id='LC330'><br></div><div class='line' id='LC331'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nb">document</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC332'>	<span class="c1">// In worker</span></div><div class='line' id='LC333'>	<span class="nx">self</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;message&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">evt</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC334'>		<span class="kd">var</span> <span class="nx">message</span> <span class="o">=</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span><span class="p">(</span><span class="nx">evt</span><span class="p">.</span><span class="nx">data</span><span class="p">),</span></div><div class='line' id='LC335'>		    <span class="nx">lang</span> <span class="o">=</span> <span class="nx">message</span><span class="p">.</span><span class="nx">language</span><span class="p">,</span></div><div class='line' id='LC336'>		    <span class="nx">code</span> <span class="o">=</span> <span class="nx">message</span><span class="p">.</span><span class="nx">code</span><span class="p">;</span></div><div class='line' id='LC337'><br></div><div class='line' id='LC338'>		<span class="nx">self</span><span class="p">.</span><span class="nx">postMessage</span><span class="p">(</span><span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span><span class="p">(</span><span class="nx">_</span><span class="p">.</span><span class="nx">tokenize</span><span class="p">(</span><span class="nx">code</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">languages</span><span class="p">[</span><span class="nx">lang</span><span class="p">])));</span></div><div class='line' id='LC339'>		<span class="nx">self</span><span class="p">.</span><span class="nx">close</span><span class="p">();</span></div><div class='line' id='LC340'>	<span class="p">},</span> <span class="kc">false</span><span class="p">);</span></div><div class='line' id='LC341'><br></div><div class='line' id='LC342'>	<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC343'><span class="p">}</span></div><div class='line' id='LC344'><br></div><div class='line' id='LC345'><span class="c1">// Get current script and highlight</span></div><div class='line' id='LC346'><span class="kd">var</span> <span class="nx">script</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s1">&#39;script&#39;</span><span class="p">);</span></div><div class='line' id='LC347'><br></div><div class='line' id='LC348'><span class="nx">script</span> <span class="o">=</span> <span class="nx">script</span><span class="p">[</span><span class="nx">script</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC349'><br></div><div class='line' id='LC350'><span class="k">if</span> <span class="p">(</span><span class="nx">script</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC351'>	<span class="nx">_</span><span class="p">.</span><span class="nx">filename</span> <span class="o">=</span> <span class="nx">script</span><span class="p">.</span><span class="nx">src</span><span class="p">;</span></div><div class='line' id='LC352'><br></div><div class='line' id='LC353'>	<span class="k">if</span> <span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">script</span><span class="p">.</span><span class="nx">hasAttribute</span><span class="p">(</span><span class="s1">&#39;data-manual&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC354'>		<span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s1">&#39;DOMContentLoaded&#39;</span><span class="p">,</span> <span class="nx">_</span><span class="p">.</span><span class="nx">highlightAll</span><span class="p">);</span></div><div class='line' id='LC355'>	<span class="p">}</span></div><div class='line' id='LC356'><span class="p">}</span></div><div class='line' id='LC357'><br></div><div class='line' id='LC358'><span class="p">})();</span></div><div class='line' id='LC359'><br></div><div class='line' id='LC360'><span class="cm">/* **********************************************</span></div><div class='line' id='LC361'><span class="cm">     Begin prism-markup.js</span></div><div class='line' id='LC362'><span class="cm">********************************************** */</span></div><div class='line' id='LC363'><br></div><div class='line' id='LC364'><span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">markup</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC365'>	<span class="s1">&#39;comment&#39;</span><span class="o">:</span> <span class="sr">/&amp;lt;!--[\w\W]*?--&gt;/g</span><span class="p">,</span></div><div class='line' id='LC366'>	<span class="s1">&#39;prolog&#39;</span><span class="o">:</span> <span class="sr">/&amp;lt;\?.+?\?&gt;/</span><span class="p">,</span></div><div class='line' id='LC367'>	<span class="s1">&#39;doctype&#39;</span><span class="o">:</span> <span class="sr">/&amp;lt;!DOCTYPE.+?&gt;/</span><span class="p">,</span></div><div class='line' id='LC368'>	<span class="s1">&#39;cdata&#39;</span><span class="o">:</span> <span class="sr">/&amp;lt;!\[CDATA\[[\w\W]*?]]&gt;/i</span><span class="p">,</span></div><div class='line' id='LC369'>	<span class="s1">&#39;tag&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC370'>		<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/&amp;lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:(&quot;|&#39;)(\\?[\w\W])*?\1|\w+))?\s*)*\/?&gt;/gi</span><span class="p">,</span></div><div class='line' id='LC371'>		<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC372'>			<span class="s1">&#39;tag&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC373'>				<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/^&amp;lt;\/?[\w:-]+/i</span><span class="p">,</span></div><div class='line' id='LC374'>				<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC375'>					<span class="s1">&#39;punctuation&#39;</span><span class="o">:</span> <span class="sr">/^&amp;lt;\/?/</span><span class="p">,</span></div><div class='line' id='LC376'>					<span class="s1">&#39;namespace&#39;</span><span class="o">:</span> <span class="sr">/^[\w-]+?:/</span></div><div class='line' id='LC377'>				<span class="p">}</span></div><div class='line' id='LC378'>			<span class="p">},</span></div><div class='line' id='LC379'>			<span class="s1">&#39;attr-value&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC380'>				<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/=(?:(&#39;|&quot;)[\w\W]*?(\1)|[^\s&gt;]+)/gi</span><span class="p">,</span></div><div class='line' id='LC381'>				<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC382'>					<span class="s1">&#39;punctuation&#39;</span><span class="o">:</span> <span class="sr">/=|&gt;|&quot;/g</span></div><div class='line' id='LC383'>				<span class="p">}</span></div><div class='line' id='LC384'>			<span class="p">},</span></div><div class='line' id='LC385'>			<span class="s1">&#39;punctuation&#39;</span><span class="o">:</span> <span class="sr">/\/?&gt;/g</span><span class="p">,</span></div><div class='line' id='LC386'>			<span class="s1">&#39;attr-name&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC387'>				<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/[\w:-]+/g</span><span class="p">,</span></div><div class='line' id='LC388'>				<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC389'>					<span class="s1">&#39;namespace&#39;</span><span class="o">:</span> <span class="sr">/^[\w-]+?:/</span></div><div class='line' id='LC390'>				<span class="p">}</span></div><div class='line' id='LC391'>			<span class="p">}</span></div><div class='line' id='LC392'><br></div><div class='line' id='LC393'>		<span class="p">}</span></div><div class='line' id='LC394'>	<span class="p">},</span></div><div class='line' id='LC395'>	<span class="s1">&#39;entity&#39;</span><span class="o">:</span> <span class="sr">/&amp;amp;#?[\da-z]{1,8};/gi</span></div><div class='line' id='LC396'><span class="p">};</span></div><div class='line' id='LC397'><br></div><div class='line' id='LC398'><span class="c1">// Plugin to make entity title show the real entity, idea by Roman Komarov</span></div><div class='line' id='LC399'><span class="nx">Prism</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="s1">&#39;wrap&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">env</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC400'><br></div><div class='line' id='LC401'>	<span class="k">if</span> <span class="p">(</span><span class="nx">env</span><span class="p">.</span><span class="nx">type</span> <span class="o">===</span> <span class="s1">&#39;entity&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'>		<span class="nx">env</span><span class="p">.</span><span class="nx">attributes</span><span class="p">[</span><span class="s1">&#39;title&#39;</span><span class="p">]</span> <span class="o">=</span> <span class="nx">env</span><span class="p">.</span><span class="nx">content</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&amp;amp;/</span><span class="p">,</span> <span class="s1">&#39;&amp;&#39;</span><span class="p">);</span></div><div class='line' id='LC403'>	<span class="p">}</span></div><div class='line' id='LC404'><span class="p">});</span></div><div class='line' id='LC405'><br></div><div class='line' id='LC406'><span class="cm">/* **********************************************</span></div><div class='line' id='LC407'><span class="cm">     Begin prism-css.js</span></div><div class='line' id='LC408'><span class="cm">********************************************** */</span></div><div class='line' id='LC409'><br></div><div class='line' id='LC410'><span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">css</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC411'>	<span class="s1">&#39;comment&#39;</span><span class="o">:</span> <span class="sr">/\/\*[\w\W]*?\*\//g</span><span class="p">,</span></div><div class='line' id='LC412'>	<span class="s1">&#39;atrule&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC413'>		<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/@[\w-]+?.*?(;|(?=\s*{))/gi</span><span class="p">,</span></div><div class='line' id='LC414'>		<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC415'>			<span class="s1">&#39;punctuation&#39;</span><span class="o">:</span> <span class="sr">/[;:]/g</span></div><div class='line' id='LC416'>		<span class="p">}</span></div><div class='line' id='LC417'>	<span class="p">},</span></div><div class='line' id='LC418'>	<span class="s1">&#39;url&#39;</span><span class="o">:</span> <span class="sr">/url\(([&quot;&#39;]?).*?\1\)/gi</span><span class="p">,</span></div><div class='line' id='LC419'>	<span class="s1">&#39;selector&#39;</span><span class="o">:</span> <span class="sr">/[^\{\}\s][^\{\};]*(?=\s*\{)/g</span><span class="p">,</span></div><div class='line' id='LC420'>	<span class="s1">&#39;property&#39;</span><span class="o">:</span> <span class="sr">/(\b|\B)[\w-]+(?=\s*:)/ig</span><span class="p">,</span></div><div class='line' id='LC421'>	<span class="s1">&#39;string&#39;</span><span class="o">:</span> <span class="sr">/(&quot;|&#39;)(\\?.)*?\1/g</span><span class="p">,</span></div><div class='line' id='LC422'>	<span class="s1">&#39;important&#39;</span><span class="o">:</span> <span class="sr">/\B!important\b/gi</span><span class="p">,</span></div><div class='line' id='LC423'>	<span class="s1">&#39;ignore&#39;</span><span class="o">:</span> <span class="sr">/&amp;(lt|gt|amp);/gi</span><span class="p">,</span></div><div class='line' id='LC424'>	<span class="s1">&#39;punctuation&#39;</span><span class="o">:</span> <span class="sr">/[\{\};:]/g</span></div><div class='line' id='LC425'><span class="p">};</span></div><div class='line' id='LC426'><br></div><div class='line' id='LC427'><span class="k">if</span> <span class="p">(</span><span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">markup</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC428'>	<span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="s1">&#39;markup&#39;</span><span class="p">,</span> <span class="s1">&#39;tag&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC429'>		<span class="s1">&#39;style&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC430'>			<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/(&amp;lt;|&lt;)style[\w\W]*?(&gt;|&amp;gt;)[\w\W]*?(&amp;lt;|&lt;)\/style(&gt;|&amp;gt;)/ig</span><span class="p">,</span></div><div class='line' id='LC431'>			<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC432'>				<span class="s1">&#39;tag&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC433'>					<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/(&amp;lt;|&lt;)style[\w\W]*?(&gt;|&amp;gt;)|(&amp;lt;|&lt;)\/style(&gt;|&amp;gt;)/ig</span><span class="p">,</span></div><div class='line' id='LC434'>					<span class="nx">inside</span><span class="o">:</span> <span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">markup</span><span class="p">.</span><span class="nx">tag</span><span class="p">.</span><span class="nx">inside</span></div><div class='line' id='LC435'>				<span class="p">},</span></div><div class='line' id='LC436'>				<span class="nx">rest</span><span class="o">:</span> <span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">css</span></div><div class='line' id='LC437'>			<span class="p">}</span></div><div class='line' id='LC438'>		<span class="p">}</span></div><div class='line' id='LC439'>	<span class="p">});</span></div><div class='line' id='LC440'><span class="p">}</span></div><div class='line' id='LC441'><br></div><div class='line' id='LC442'><span class="cm">/* **********************************************</span></div><div class='line' id='LC443'><span class="cm">     Begin prism-clike.js</span></div><div class='line' id='LC444'><span class="cm">********************************************** */</span></div><div class='line' id='LC445'><br></div><div class='line' id='LC446'><span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">clike</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC447'>	<span class="s1">&#39;comment&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC448'>		<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g</span><span class="p">,</span></div><div class='line' id='LC449'>		<span class="nx">lookbehind</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC450'>	<span class="p">},</span></div><div class='line' id='LC451'>	<span class="s1">&#39;string&#39;</span><span class="o">:</span> <span class="sr">/(&quot;|&#39;)(\\?.)*?\1/g</span><span class="p">,</span></div><div class='line' id='LC452'>	<span class="s1">&#39;class-name&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC453'>		<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/((?:class|interface|extends|implements|trait|instanceof|new)\s+)[a-z0-9_\.\\]+/ig</span><span class="p">,</span></div><div class='line' id='LC454'>		<span class="nx">lookbehind</span><span class="o">:</span> <span class="kc">true</span><span class="p">,</span></div><div class='line' id='LC455'>		<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC456'>			<span class="nx">punctuation</span><span class="o">:</span> <span class="sr">/(\.|\\)/</span></div><div class='line' id='LC457'>		<span class="p">}</span></div><div class='line' id='LC458'>	<span class="p">},</span></div><div class='line' id='LC459'>	<span class="s1">&#39;keyword&#39;</span><span class="o">:</span> <span class="sr">/\b(if|else|while|do|for|return|in|instanceof|function|new|try|catch|finally|null|break|continue)\b/g</span><span class="p">,</span></div><div class='line' id='LC460'>	<span class="s1">&#39;boolean&#39;</span><span class="o">:</span> <span class="sr">/\b(true|false)\b/g</span><span class="p">,</span></div><div class='line' id='LC461'>	<span class="s1">&#39;function&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC462'>		<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/[a-z0-9_]+\(/ig</span><span class="p">,</span></div><div class='line' id='LC463'>		<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC464'>			<span class="nx">punctuation</span><span class="o">:</span> <span class="sr">/\(/</span></div><div class='line' id='LC465'>		<span class="p">}</span></div><div class='line' id='LC466'>	<span class="p">},</span></div><div class='line' id='LC467'>	<span class="s1">&#39;number&#39;</span><span class="o">:</span> <span class="sr">/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g</span><span class="p">,</span></div><div class='line' id='LC468'>	<span class="s1">&#39;operator&#39;</span><span class="o">:</span> <span class="sr">/[-+]{1,2}|!|=?&amp;lt;|=?&amp;gt;|={1,2}|(&amp;amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g</span><span class="p">,</span></div><div class='line' id='LC469'>	<span class="s1">&#39;ignore&#39;</span><span class="o">:</span> <span class="sr">/&amp;(lt|gt|amp);/gi</span><span class="p">,</span></div><div class='line' id='LC470'>	<span class="s1">&#39;punctuation&#39;</span><span class="o">:</span> <span class="sr">/[{}[\];(),.:]/g</span></div><div class='line' id='LC471'><span class="p">};</span></div><div class='line' id='LC472'><br></div><div class='line' id='LC473'><span class="cm">/* **********************************************</span></div><div class='line' id='LC474'><span class="cm">     Begin prism-javascript.js</span></div><div class='line' id='LC475'><span class="cm">********************************************** */</span></div><div class='line' id='LC476'><br></div><div class='line' id='LC477'><span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">javascript</span> <span class="o">=</span> <span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">extend</span><span class="p">(</span><span class="s1">&#39;clike&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC478'>	<span class="s1">&#39;keyword&#39;</span><span class="o">:</span> <span class="sr">/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|catch|finally|null|break|continue)\b/g</span><span class="p">,</span></div><div class='line' id='LC479'>	<span class="s1">&#39;number&#39;</span><span class="o">:</span> <span class="sr">/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g</span></div><div class='line' id='LC480'><span class="p">});</span></div><div class='line' id='LC481'><br></div><div class='line' id='LC482'><span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="s1">&#39;javascript&#39;</span><span class="p">,</span> <span class="s1">&#39;keyword&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC483'>	<span class="s1">&#39;regex&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC484'>		<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g</span><span class="p">,</span></div><div class='line' id='LC485'>		<span class="nx">lookbehind</span><span class="o">:</span> <span class="kc">true</span></div><div class='line' id='LC486'>	<span class="p">}</span></div><div class='line' id='LC487'><span class="p">});</span></div><div class='line' id='LC488'><br></div><div class='line' id='LC489'><span class="k">if</span> <span class="p">(</span><span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">markup</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC490'>	<span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="s1">&#39;markup&#39;</span><span class="p">,</span> <span class="s1">&#39;tag&#39;</span><span class="p">,</span> <span class="p">{</span></div><div class='line' id='LC491'>		<span class="s1">&#39;script&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC492'>			<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/(&amp;lt;|&lt;)script[\w\W]*?(&gt;|&amp;gt;)[\w\W]*?(&amp;lt;|&lt;)\/script(&gt;|&amp;gt;)/ig</span><span class="p">,</span></div><div class='line' id='LC493'>			<span class="nx">inside</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC494'>				<span class="s1">&#39;tag&#39;</span><span class="o">:</span> <span class="p">{</span></div><div class='line' id='LC495'>					<span class="nx">pattern</span><span class="o">:</span> <span class="sr">/(&amp;lt;|&lt;)script[\w\W]*?(&gt;|&amp;gt;)|(&amp;lt;|&lt;)\/script(&gt;|&amp;gt;)/ig</span><span class="p">,</span></div><div class='line' id='LC496'>					<span class="nx">inside</span><span class="o">:</span> <span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">markup</span><span class="p">.</span><span class="nx">tag</span><span class="p">.</span><span class="nx">inside</span></div><div class='line' id='LC497'>				<span class="p">},</span></div><div class='line' id='LC498'>				<span class="nx">rest</span><span class="o">:</span> <span class="nx">Prism</span><span class="p">.</span><span class="nx">languages</span><span class="p">.</span><span class="nx">javascript</span></div><div class='line' id='LC499'>			<span class="p">}</span></div><div class='line' id='LC500'>		<span class="p">}</span></div><div class='line' id='LC501'>	<span class="p">});</span></div><div class='line' id='LC502'><span class="p">}</span></div><div class='line' id='LC503'><br></div><div class='line' id='LC504'><span class="cm">/* **********************************************</span></div><div class='line' id='LC505'><span class="cm">     Begin prism-file-highlight.js</span></div><div class='line' id='LC506'><span class="cm">********************************************** */</span></div><div class='line' id='LC507'><br></div><div class='line' id='LC508'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span></div><div class='line' id='LC509'><br></div><div class='line' id='LC510'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nx">Prism</span> <span class="o">||</span> <span class="o">!</span><span class="nx">self</span><span class="p">.</span><span class="nb">document</span> <span class="o">||</span> <span class="o">!</span><span class="nb">document</span><span class="p">.</span><span class="nx">querySelector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC511'>	<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC512'><span class="p">}</span></div><div class='line' id='LC513'><br></div><div class='line' id='LC514'><span class="kd">var</span> <span class="nx">Extensions</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC515'>	<span class="s1">&#39;js&#39;</span><span class="o">:</span> <span class="s1">&#39;javascript&#39;</span><span class="p">,</span></div><div class='line' id='LC516'>	<span class="s1">&#39;html&#39;</span><span class="o">:</span> <span class="s1">&#39;markup&#39;</span><span class="p">,</span></div><div class='line' id='LC517'>	<span class="s1">&#39;svg&#39;</span><span class="o">:</span> <span class="s1">&#39;markup&#39;</span></div><div class='line' id='LC518'><span class="p">};</span></div><div class='line' id='LC519'><br></div><div class='line' id='LC520'><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">querySelectorAll</span><span class="p">(</span><span class="s1">&#39;pre[data-src]&#39;</span><span class="p">)).</span><span class="nx">forEach</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">pre</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC521'>	<span class="kd">var</span> <span class="nx">src</span> <span class="o">=</span> <span class="nx">pre</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s1">&#39;data-src&#39;</span><span class="p">);</span></div><div class='line' id='LC522'>	<span class="kd">var</span> <span class="nx">extension</span> <span class="o">=</span> <span class="p">(</span><span class="nx">src</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/\.(\w+)$/</span><span class="p">)</span> <span class="o">||</span> <span class="p">[,</span><span class="s1">&#39;&#39;</span><span class="p">])[</span><span class="mi">1</span><span class="p">];</span></div><div class='line' id='LC523'>	<span class="kd">var</span> <span class="nx">language</span> <span class="o">=</span> <span class="nx">Extensions</span><span class="p">[</span><span class="nx">extension</span><span class="p">]</span> <span class="o">||</span> <span class="nx">extension</span><span class="p">;</span></div><div class='line' id='LC524'><br></div><div class='line' id='LC525'>	<span class="kd">var</span> <span class="nx">code</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;code&#39;</span><span class="p">);</span></div><div class='line' id='LC526'>	<span class="nx">code</span><span class="p">.</span><span class="nx">className</span> <span class="o">=</span> <span class="s1">&#39;language-&#39;</span> <span class="o">+</span> <span class="nx">language</span><span class="p">;</span></div><div class='line' id='LC527'><br></div><div class='line' id='LC528'>	<span class="nx">pre</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC529'><br></div><div class='line' id='LC530'>	<span class="nx">code</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="s1">&#39;Loading…&#39;</span><span class="p">;</span></div><div class='line' id='LC531'><br></div><div class='line' id='LC532'>	<span class="nx">pre</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">code</span><span class="p">);</span></div><div class='line' id='LC533'><br></div><div class='line' id='LC534'>	<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">XMLHttpRequest</span><span class="p">();</span></div><div class='line' id='LC535'><br></div><div class='line' id='LC536'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">open</span><span class="p">(</span><span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="nx">src</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC537'><br></div><div class='line' id='LC538'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">onreadystatechange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC539'>		<span class="k">if</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">readyState</span> <span class="o">==</span> <span class="mi">4</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC540'><br></div><div class='line' id='LC541'>			<span class="k">if</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">&lt;</span> <span class="mi">400</span> <span class="o">&amp;&amp;</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC542'>				<span class="nx">code</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">responseText</span><span class="p">;</span></div><div class='line' id='LC543'><br></div><div class='line' id='LC544'>				<span class="nx">Prism</span><span class="p">.</span><span class="nx">highlightElement</span><span class="p">(</span><span class="nx">code</span><span class="p">);</span></div><div class='line' id='LC545'>			<span class="p">}</span></div><div class='line' id='LC546'>			<span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">&gt;=</span> <span class="mi">400</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC547'>				<span class="nx">code</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="s1">&#39;✖ Error &#39;</span> <span class="o">+</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">status</span> <span class="o">+</span> <span class="s1">&#39; while fetching file: &#39;</span> <span class="o">+</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">statusText</span><span class="p">;</span></div><div class='line' id='LC548'>			<span class="p">}</span></div><div class='line' id='LC549'>			<span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC550'>				<span class="nx">code</span><span class="p">.</span><span class="nx">textContent</span> <span class="o">=</span> <span class="s1">&#39;✖ Error: File does not exist or is empty&#39;</span><span class="p">;</span></div><div class='line' id='LC551'>			<span class="p">}</span></div><div class='line' id='LC552'>		<span class="p">}</span></div><div class='line' id='LC553'>	<span class="p">};</span></div><div class='line' id='LC554'><br></div><div class='line' id='LC555'>	<span class="nx">xhr</span><span class="p">.</span><span class="nx">send</span><span class="p">(</span><span class="kc">null</span><span class="p">);</span></div><div class='line' id='LC556'><span class="p">});</span></div><div class='line' id='LC557'><br></div><div class='line' id='LC558'><span class="p">})();</span></div></pre></div></td>
         </tr>
       </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.09573s from github-fe123-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-8c6e10f6700610e693b29e274318b3714523ca3e.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-53b1cad44f4d246c4d6b5d8f660705e5f21288c1.js" type="text/javascript"></script>
      
      
        <script async src="https://www.google-analytics.com/analytics.js"></script>
  </body>
</html>

