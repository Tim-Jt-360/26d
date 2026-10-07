(function(){
let translateObjs = {};
const trans = (...a) => {
    return translateObjs[a[0x0]] = a, '';
};
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.')['map'](function (r) {
                        return r['trim']();
                    }), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a], a['split']('.')[0x0]);
        let l = a['split']('.'), m = l[0x0] + '_vr';
        m in this && k['updateText'](k['translateObjs'][a], m);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this, !![]), e['call'](this);
                };
            m['bind']('begin', n, this, !![]);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"children":["this.MainViewer"],"scripts":{"isComponentVisible":TDV.Tour.Script.isComponentVisible,"initAnalytics":TDV.Tour.Script.initAnalytics,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"setLocale":TDV.Tour.Script.setLocale,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"clone":TDV.Tour.Script.clone,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setValue":TDV.Tour.Script.setValue,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"registerKey":TDV.Tour.Script.registerKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"getKey":TDV.Tour.Script.getKey,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"createTweenModel3D":TDV.Tour.Script.createTweenModel3D,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getPixels":TDV.Tour.Script.getPixels,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openLink":TDV.Tour.Script.openLink,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"historyGoForward":TDV.Tour.Script.historyGoForward,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"playAudioList":TDV.Tour.Script.playAudioList,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"shareSocial":TDV.Tour.Script.shareSocial,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"init":TDV.Tour.Script.init,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"toggleVR":TDV.Tour.Script.toggleVR,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getOverlays":TDV.Tour.Script.getOverlays,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"isPanorama":TDV.Tour.Script.isPanorama,"initQuiz":TDV.Tour.Script.initQuiz,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showWindowBase":TDV.Tour.Script.showWindowBase,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"enableVR":TDV.Tour.Script.enableVR,"unloadViewer":TDV.Tour.Script.unloadViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeJS":TDV.Tour.Script.executeJS,"getComponentByName":TDV.Tour.Script.getComponentByName,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"createTween":TDV.Tour.Script.createTween,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"disableVR":TDV.Tour.Script.disableVR,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"quizFinish":TDV.Tour.Script.quizFinish,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"showWindow":TDV.Tour.Script.showWindow,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"mixObject":TDV.Tour.Script.mixObject,"translate":TDV.Tour.Script.translate,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"textToSpeech":TDV.Tour.Script.textToSpeech,"startMeasurement":TDV.Tour.Script.startMeasurement,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"downloadFile":TDV.Tour.Script.downloadFile,"unregisterKey":TDV.Tour.Script.unregisterKey,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"existsKey":TDV.Tour.Script.existsKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers},"id":"rootPlayer","data":{"locales":{"es":"locale/es.txt"},"history":{},"textToSpeechConfig":{"pitch":1,"stopBackgroundAudio":false,"volume":1,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false},"name":"Player2579","displayTooltipInTouchScreens":true,"defaultLocale":"es"},"hash": "1b3d6bacef532224f0eb8778b78883b65907abda7dd6bcf1d7b841bc156cef93", "definitions": [{"hfov":360,"thumbnailUrl":"media/panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_t.webp","class":"Panorama","frames":[{"thumbnailUrl":"media/panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_t.webp","class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"height":4096,"url":"media/panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_0/{face}/0/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":8,"colCount":48,"width":24576,"tags":"ondemand"},{"height":2048,"url":"media/panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_0/{face}/1/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":4,"colCount":24,"width":12288,"tags":"ondemand"},{"height":1024,"url":"media/panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_0/{face}/2/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":2,"colCount":12,"width":6144,"tags":"ondemand"},{"height":512,"url":"media/panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_0/{face}/3/{row}_{column}.webp","class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"width":3072,"tags":["ondemand","preload"]}]}}],"vfov":180,"data":{"label":"Sch\u00fcepwis 26d"},"hfovMax":130,"label":trans('panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB.label'),"id":"panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB"},{"id":"mainPlayList","items":[{"camera":"this.panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_camera","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB"}],"class":"PlayList"},{"enterPointingToHorizon":true,"initialPosition":{"pitch":0,"class":"PanoramaCameraPosition","yaw":0},"class":"PanoramaCamera","initialSequence":"this.sequence_1ABB4399_16E7_AC78_41AF_09D9A8927E81","id":"panorama_1A587A20_16E7_BC47_419B_E3C9B3C4F1DB_camera"},{"class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","arrowKeysAction":"translate","aaEnabled":true,"id":"MainViewerPanoramaPlayer","displayPlaybackBar":true,"mouseControlMode":"drag_rotation"},{"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBorderSize":0,"vrPointerColor":"#FFFFFF","playbackBarBottom":5,"subtitlesFontFamily":"Arial","progressBorderRadius":2,"surfaceReticleColor":"#FFFFFF","progressLeft":"33%","playbackBarHeadHeight":15,"playbackBarHeadShadowVerticalLength":0,"playbackBarBackgroundColor":["#FFFFFF"],"data":{"name":"Main Viewer"},"playbackBarHeight":10,"playbackBarHeadWidth":6,"propagateClick":false,"playbackBarProgressBorderSize":0,"toolTipBorderColor":"#767676","playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipPaddingTop":4,"subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadowOpacity":0.7,"toolTipFontSize":"1.11vmin","vrPointerSelectionColor":"#FF6600","subtitlesTextShadowHorizontalLength":1,"subtitlesGap":0,"subtitlesBackgroundColor":"#000000","toolTipPaddingBottom":4,"playbackBarProgressBackgroundColorRatios":[0],"toolTipPaddingRight":6,"subtitlesTextShadowOpacity":1,"vrPointerSelectionTime":2000,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBorderColor":"#FFFFFF","playbackBarBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","toolTipShadowColor":"#333138","progressBackgroundColorRatios":[0],"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","progressOpacity":0.7,"id":"MainViewer","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","toolTipFontFamily":"Arial","progressBarBackgroundColorDirection":"horizontal","playbackBarBorderSize":0,"progressBarBorderColor":"#000000","progressRight":"33%","progressBarBackgroundColorRatios":[0],"subtitlesFontSize":"3vmin","subtitlesBackgroundOpacity":0.2,"subtitlesBorderColor":"#FFFFFF","progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"vrThumbstickRotationStep":20,"class":"ViewerArea","playbackBarBackgroundOpacity":1,"toolTipBackgroundColor":"#F6F6F6","minHeight":50,"subtitlesBottom":50,"minWidth":100,"progressBackgroundColor":["#000000"],"playbackBarHeadShadowBlurRadius":3,"playbackBarLeft":0,"progressBottom":10,"toolTipPaddingLeft":6,"playbackBarHeadShadowColor":"#000000","height":"100%","toolTipTextShadowColor":"#000000","progressBorderSize":0,"width":"100%","toolTipFontColor":"#606060","playbackBarHeadShadow":true,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarHeadBackgroundColorRatios":[0,1],"firstTransitionDuration":0,"playbackBarHeadBorderSize":0},{"movements":[{"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_1ABB4399_16E7_AC78_41AF_09D9A8927E81"}],"backgroundColor":["#FFFFFF"],"start":"this.init()","layout":"absolute","scrollBarMargin":2,"propagateClick":false,"watermark":false,"class":"Player","xrPanelsEnabled":true,"minHeight":0,"minWidth":0,"backgroundColorRatios":[0],"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"height":"100%","scrollBarColor":"#000000","width":"100%"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    let a = {}, b = this['get']('data')['translateObjs'];
    for (const c in translateObjs) {
        if (!b['hasOwnProperty'](c))
            b[c] = translateObjs[c];
    }
    return a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2026.1.2, Wed Oct 7 2026