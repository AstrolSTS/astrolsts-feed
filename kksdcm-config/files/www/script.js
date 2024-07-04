var userLevel =  "USER";
var activeIndex = -1;
var indexChanged = true;
var parameterInit = false;
var parameterCheckboxLast = 0;
var refreshAll = false;
var refreshAlldone = false;
var commitGenerator = false;
var commitGeneratorSettings = false;
var activeConfigBIT = 15;
var WEB_OFFLINE = 0;
var MAX_GENERATORS = 16;
var generatorComOK    = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var generatorFound    = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var markingChanges    = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var COM_SCAN_TIME     = 10;
var com_scan_cnt      = 0;
var nb_commits        = 0;

var generatorEnabled  = [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];      // 0 = disable, 1 = enable
var generatorSimulate = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];      // 0 = kksdcmd api, 1 = constant values
var generatorIP =       [ 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13,14,15,16];      // ip address last segment (used for rest api)
var generatorIPbase     = "192.168.1.";                                         // ip address first three segements (used for rest api)

var b64_logo = "data:image/png;base64,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tzV5D7jcAYafdMmQHMlPUygUgPcz+qYcMHQL9K25vbX2cfoAZKir5Rvg4BAYL1L2use7A529/Xum1d8PgctyrfsL78EAAA+caVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczppcHRjRXh0PSJodHRwOi8vaXB0Yy5vcmcvc3RkL0lwdGM0eG1wRXh0LzIwMDgtMDItMjkvIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgeG1sbnM6cGx1cz0iaHR0cDovL25zLnVzZXBsdXMub3JnL2xkZi94bXAvMS4wLyIKICAgIHhtbG5zOkdJTVA9Imh0dHA6Ly93d3cuZ2ltcC5vcmcveG1wLyIKICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICB4bXBNTTpEb2N1bWVudElEPSJnaW1wOmRvY2lkOmdpbXA6ZDZlOTJmMDAtMzliNi00NGEwLThmYmMtMDYxOGI2ZTQzOTc0IgogICB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOmU2YTZiMjYxLTNmOTctNDVlNy1hNmQ0LThiMWI5YTc1NDU5MiIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjkxNTE2NGI0LTU2N2MtNDRhMi04MDYxLWZlNDM4ZDM4NTc0NSIKICAgR0lNUDpBUEk9IjIuMCIKICAgR0lNUDpQbGF0Zm9ybT0iV2luZG93cyIKICAgR0lNUDpUaW1lU3RhbXA9IjE2NjMzMTg0MTgzNTEzOTgiCiAgIEdJTVA6VmVyc2lvbj0iMi4xMC4yMiIKICAgZGM6Rm9ybWF0PSJpbWFnZS9wbmciCiAgIHRpZmY6T3JpZW50YXRpb249IjEiCiAgIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIj4KICAgPGlwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25DcmVhdGVkPgogICA8aXB0Y0V4dDpMb2NhdGlvblNob3duPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgPGlwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6QXJ0d29ya09yT2JqZWN0PgogICA8aXB0Y0V4dDpSZWdpc3RyeUlkPgogICAgPHJkZjpCYWcvPgogICA8L2lwdGNFeHQ6UmVnaXN0cnlJZD4KICAgPHhtcE1NOkhpc3Rvcnk+CiAgICA8cmRmOlNlcT4KICAgICA8cmRmOmxpCiAgICAgIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiCiAgICAgIHN0RXZ0OmNoYW5nZWQ9Ii8iCiAgICAgIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGQyNTVmNjEtYjViMy00YWJmLTg2NTQtYzZjNTJhNTk3MDZkIgogICAgICBzdEV2dDpzb2Z0d2FyZUFnZW50PSJHaW1wIDIuMTAgKFdpbmRvd3MpIgogICAgICBzdEV2dDp3aGVuPSIyMDIyLTA5LTE2VDEwOjUzOjM4Ii8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICAgPHBsdXM6SW1hZ2VTdXBwbGllcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlU3VwcGxpZXI+CiAgIDxwbHVzOkltYWdlQ3JlYXRvcj4KICAgIDxyZGY6U2VxLz4KICAgPC9wbHVzOkltYWdlQ3JlYXRvcj4KICAgPHBsdXM6Q29weXJpZ2h0T3duZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpDb3B5cmlnaHRPd25lcj4KICAgPHBsdXM6TGljZW5zb3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpMaWNlbnNvcj4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PkJUIFQAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfmCRAINSYv73EiAAAgAElEQVR42u19aXRc5Znm892t6tamUm1SSZZsybJkC+8GjCEQx3TASWiSEAJkMMQQBgayzGR6Oqf7nJkz82NO98zp6enu5BCysATcQEhoSCeGIUDAMSRgbBljC7xgC9mytiotpdrv+s2Pa0t1Jevekl0qOe37nKNz7NKtq6rvvs/37u9Hent7KRw4cHBOMGf/oSsKQB2uOLjEQanBhekE0QoFqLmcs0AOLmmouRy0QmEmQVi3G/J4ClTXnVVycGkqD12HnEqBdbtnEoQRBGiFAqSREWelHFySkEZGoBcKYARhJkEAQKitRe7Yx6Cq5qyWg0tLe6gacsc+Bh+sPbeTbhAkCC2dQf70aWfFHFxSyJ8+DS2dgVAbnJ0ghOPAx6JI790HXVacVXNwSUBXFKT37gMfi4Jw3OwEAQBx0SIUDhxE/mSvs3IOLg3t0XsShQMHITY2zvjdDIIItUEIS5ox8Yd3oBWlMg04J3/i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";
var LNG = localStorage.getItem('languageIndex') || 0;
var testValue = localStorage.getItem('testValue') || 0;
var userLevelLogged = localStorage.getItem('userLevelLogged') || 0;


var mb_response = [[],[],[],[], [],[],[],[], [],[],[],[], [],[],[],[]];
var add_infos = [[],[],[],[], [],[],[],[], [],[],[],[], [],[],[],[]];


function updatePage(page, level) {

    level = check_access(level);

    if(page == "monitor" && (level == "US-ENG" || level == "ENG")) {
        update_modbus_register();
        writeMonitorTable(level,"update");
        writeMonitorExtended(level,"update");
        writeLMparameter(level,"update");
        writeCounterOverview(level,"update");
        end_of_update();
    }
    if(page == "monitor" && level == "USER") {
        update_modbus_register();
        writeMonitorTable(level,"update");
        end_of_update();
    }
   
}


function refreshRegisterList() {
    if(nb_commits <= 0) {
        for(var k=0;k<MAX_GENERATORS;k++) {
            if(generatorEnabled[k]) {       
                if(generatorSimulate[k] == 0) {
                    // get modbus register contents
                    if(indexChanged || mb_response[k].length == 0 || refreshAll) {
                        fetch_generator(k, "all");
                    }
                    else {
                        fetch_generator(k, "inputs");
                        fetch_generator(k,"pn_controls");
                    }
                }
                else if(generatorSimulate[k] == 1) {
                    mb_response[k] = [];
                    for(var i=0;i<sim_mb_data.result[1].result.length;i++) {
                        mb_response[k].push(sim_mb_data.result[1].result[i]);
                    }
                }    
            }
        }
    }
}

function fetch_generator(genIndex,mode) {
    let call;
    switch(mode) {
        default:
        case "all":         call = { "generator": genIndex, "cmd": "list", "refresh":true }; break;
        case "inputs":      call = { "generator": genIndex, "cmd": "read", "index": 0, "count": 32, "refresh":true }; break;
        case "controls":    call = { "generator": genIndex, "cmd": "read", "index": 32, "count": 22, "refresh":true }; break;
        case "pn_controls": call = { "generator": genIndex, "cmd": "read", "index": 32, "count": 7, "refresh":false }; break;
    }
    if(generatorComOK[genIndex]) {
        apiCall(call, 10000, true, "coreregs").done(function(response) {
            response.forEach(function(reg, index, registers) {
                var obj = {};
                obj.regidx = reg.regidx;
                obj.regname = reg.regname;
                obj.description = reg.description;
                obj.modbusreg = reg.modbusreg;
                obj.spiaddr = reg.spiaddr;
                obj.min = reg.min;
                obj.max = reg.max;
                obj.value = reg.value;
                obj.formatted = reg.formatted;
                obj.symbol = reg.symbol;
                mb_response[genIndex][obj.regidx] = obj;
                if(reg.regidx == 32 && refreshAll) {
                    refreshAll = false;
                    refreshAlldone = true;
                }
            });

        }).fail(function(domain, code, message) {
            // API problem
            console.log('API error: ' + domain + '] Error ' + code.toString() + ': ' + message);
            //alert(lng.com_problem[LNG];
            
        });
    }
    
}


function update_modbus_register() {
    testValue++;
    localStorage.setItem('testValue', testValue);
    refreshRegisterList();

    for(var i=0;i<MAX_GENERATORS;i++) {
        if(markingChanges[i] && generatorEnabled[i]) {
            save_generator();
            //console.log("changes on: "+i);
            markingChanges[i] = 0;
        } 
    }
}

function end_of_update() {

    if(refreshAlldone && userLevel != "USER") {
        indexChanged = true;
        save_fw_options(false);
        writeMonitorExtended(userLevel,"update");
        writeLMparameter(userLevel,"update");
        refreshAlldone = false;
    }
    update_generator_communication();
    indexChanged = false;

    if(commitGenerator) {
        commitGenerator = false;
        if(isBackendConnected(activeIndex) && generatorSimulate[activeIndex] != 1) { 
            if(activeIndex != 0) {
                if(commitGeneratorSettings) {
                    commitGeneratorSettings == false;
                    setTimeout(function() { commit_register("configSet1","",22,true);  },     100);     // commit frequency set 1
                    setTimeout(function() { commit_register("configSet2","",22,true);  },     200);     // commit frequency set 2
                    setTimeout(function() { commit_register("configSet3","",22,true);  },     300);     // commit frequency set 3
                    setTimeout(function() { commit_register("configSet4","",22,true);  },     400);     // commit frequency set 4
                    setTimeout(function() { commit_register("control0","",2,true); },         500);     // commit control registers
                    setTimeout(function() { commit_register("degasCycleTime","",3,true); },   600);     // commit control registers
                    setTimeout(function() { commit_register("operatingTime","",1,true); },   700);     
                    setTimeout(function() { commit_register("cntPowerUp","",2,true); },   800);     
                }
                else {
                    setTimeout(function() { commit_register("control0","",2,true); },         100);     // commit control registers
                }
            }
            else {
                //refreshAll = true;
            }
        }
    }

}

function refresh_all_delayed() {
    refreshAll = true;
}

function update_generator_communication() {    
    if(com_scan_cnt < COM_SCAN_TIME) {
        for(var k=0;k<MAX_GENERATORS;k++) {
            if(generatorEnabled[k]) {   
                check_generator_com(k);
            }
        }
    }
    else {
    if((com_scan_cnt % COM_SCAN_TIME) == 0) {
        for(var k=0;k<MAX_GENERATORS;k++) {
            if(generatorEnabled[k] && generatorFound[k]) {   
                check_generator_com(k);
            }
        }
    }
    }
    com_scan_cnt++;


    for(var k=0;k<MAX_GENERATORS;k++) {
        var id = "monIndex"+k; 
        var state = "statusOFF";
        if(generatorComOK[k] > 0) {
            state = "statusON";
        }
        if(document.getElementById(id)) {
            document.getElementById(id).className = state;
        }
    }
}

function check_generator_com(genIndex) {
    if(genIndex > 0) {
        if(generatorSimulate[genIndex] < 1) {
            fetchWithTimeout ("http://"+generatorIPbase+generatorIP[genIndex].toString()+"/systemSettings",1000).then((response) => {    
                generatorComOK[genIndex] = 1;
                generatorFound[genIndex] = 1;
                add_infos[genIndex] = response;
            }).catch((error) => {
                generatorComOK[genIndex] = 0;
            });
        }
        if(generatorSimulate[genIndex] == 1) {
            generatorComOK[genIndex] = 1;
            generatorFound[genIndex] = 1;
        }
    }
    else {
        var jsonquery = {};
        var uc = ubusCall("system", "board", jsonquery, 10000, true).done(function(response) {
            var json = {};
            json.swVersion = "V " + response.release.version;
            add_infos[genIndex] = json;
            generatorComOK[genIndex] = 1;
            generatorFound[genIndex] = 1;
        }); 
        
    }
}

function read_generator() {
    refreshAll = true;
}

function reset_generator() {
    if(isBackendConnected(activeIndex) && generatorSimulate[activeIndex] != 1) {  
        var control0 = getMBregister(activeIndex,"control0").value;
        control0 &= ~(0x01);                    // stop generator
        write_register("control0",control0); 
        write_register("control1",1);           // errReset
        commitGenerator = true;
    }
}

function save_generator_all() {
    commitGeneratorSettings = true;
    save_generator();
}

function save_generator() {
    if(isBackendConnected(activeIndex) && generatorSimulate[activeIndex] != 1) {       
        var control0 = getMBregister(activeIndex,"control0").value & (0x70);
        if(isButtonState("btStatusConfig_USpower", lng.start[LNG])) { control0 |= (1 << 0); }
        var actFreqSet = getFreqSelect();
        control0 |= actFreqSet << 1;
        if(isButtonState("btStatusConfig_Degas", lng.on[LNG])) { control0 |= (1 << 7); }

        //write_register("control1",1);       // errReset
        commitGeneratorSettings = true;

        if(commitGeneratorSettings) {
            if(userLevel == "US-ENG") {
                write_register("degasCycleTime",document.getElementById("par_DegasCycleTime").value);
                write_register("degasTime",document.getElementById("par_DegasTime").value);
                write_register("degasCycleCount",document.getElementById("par_DegasCycleCount").value);       
            }

            var actConfigSet = 0;
            for(var i=0;i<4;i++) {
                var configSet = getMBregister(activeIndex,"configSet"+(i+1)).value;
                if(userLevel == "US-ENG") {
                    configSet &= (0x01);                            // all bits except usPower
                    if(document.getElementById("configSet"+i.toString()+"1").checked) { configSet |= (1 << 1);}
                    if(document.getElementById("configSet"+i.toString()+"2").checked) { configSet |= (1 << 2);}
                    if(document.getElementById("configSet"+i.toString()+"3").checked) { configSet |= (1 << 3);}
                    if(document.getElementById("configSet"+i.toString()+"5").checked) { configSet |= (1 << 5);}
                    if(document.getElementById("configSet"+i.toString()+"6").checked) { configSet |= (1 << 6);}
                }
                else {
                    configSet &= ~(1 << activeConfigBIT);           // activation bit only
                }
                if(document.getElementById("idCBsetActive"+i).checked) { configSet |= (1 << activeConfigBIT);}
                write_register("configSet"+(i+1),configSet);
                if(i == (actFreqSet - 1)) {
                    actConfigSet = configSet;
                }

                write_register("powerRangeSet"+(i+1),document.getElementById("powerRangeSet"+(i)).value);  
                write_register("powerSet"+(i+1),document.getElementById("powerSet"+(i)).value);  
                write_register("frqMinSet"+(i+1),document.getElementById("frqMinSet"+(i)).value);  
                write_register("frqMaxSet"+(i+1),document.getElementById("frqMaxSet"+(i)).value);  
                if(userLevel == "US-ENG") {
                    write_register("phaseSet"+(i+1),document.getElementById("phaseSet"+(i)).value);  
                    write_register("frqSweepShapeSet"+(i+1),document.getElementById("frqSweepShapeSet"+(i)).value);  
                    write_register("frqSweepModFrqSet"+(i+1),document.getElementById("frqSweepModFrqSet"+(i)).value);  
                    write_register("frqSweepRangeSet"+(i+1),document.getElementById("frqSweepRangeSet"+(i)).value);  
                }
            }
            control0 &= ~(0x60);        // mask out sweepAmpl and sweepFrq
            actConfigSet &= (0x60);     // fill in actual bits
            write_register("control0",control0 | actConfigSet) ;
            write_register("targetPower",document.getElementById("powerSet"+(actFreqSet-1)).value);  
            write_register("frqMin",document.getElementById("frqMinSet"+(actFreqSet-1)).value);  
            write_register("frqMax",document.getElementById("frqMaxSet"+(actFreqSet-1)).value);  
        }  
        else {
            write_register("control0",control0); 
        }  
        save_fw_options(true);
        commitGenerator = true;
    }
}

function write_register(id,value) {
    commit_register(id,value,1,false);
}

function commit_call(call) {
    apiCall(call, 10000, true, "coreregs").done(function(response) {
        if(call.commit == true && activeIndex != 0) {
            nb_commits--;
            //refreshAll = true;
        }
    }).fail(function(domain, code, message) {
        if(call.commit == true && activeIndex != 0) {
            nb_commits--;
        }
        // API problem
        alert('API error: ' + domain + '] Error ' + code.toString() + ': ' + message);

    });
}

function commit_register(id,value,count,commit) {

    if(generatorEnabled[activeIndex]) {
        if(generatorSimulate[activeIndex] == 0) {       
            let regidx = getMBregister(activeIndex,id).regidx;
            let doCommitOnly = false;
            let newValue = 0;
            let call;
            if(value === "") {
                doCommitOnly = true;
            }
            else {
                newValue = value.toString();
            }
            if(commit == false) {
                if(activeIndex != 0) {
                    call = { "generator": activeIndex,  "cmd": "write", "index":regidx, "value": newValue, "commit": commit};   
                }
                else {
                    call = { "generator": activeIndex,  "cmd": "write", "index":regidx, "value": newValue, "commit": true}; 
                }
            }
            else {
                nb_commits++;
                if(doCommitOnly) {
                    call = { "generator": activeIndex,  "cmd": "write", "index":regidx, "count": count, "commit": commit};  
                }
                else {
                    call = { "generator": activeIndex,  "cmd": "write", "index":regidx, "value": newValue, "count": 1, "commit": commit};  
                }
            }
            commit_call(call); 
        }
    }
}

function save_fw_options(permanent) {
    var fwOptions = 0;

    if(userLevel == "US-ENG") {
        fwOptions |= document.getElementById("iduRangeSet").value & 0x03;
        fwOptions |= (document.getElementById("idiRangeSet").value & 0x03) << 2;
        if(isButtonState("btSaveOperationPoint", lng.on[LNG])) { fwOptions |= (1 << 4); }
        fwOptions |= (document.getElementById("idComSelect").value & 0x03) << 6;
    }
    else {
        fwOptions = getMBregister(activeIndex,"fwOptions").value;
    } 
    if(permanent) {
        fwOptions |= (1 << 4);      // save persistent   
        write_register("fwOptions",fwOptions);
    }
    else {
        var fwOptionsAct = getMBregister(activeIndex,"fwOptions").value;
        if(fwOptionsAct & (1 << 4)) {       // is save flag set
            commit_register("fwOptions",fwOptions,1,true);                  // clear save flag
        }
    }
}

function resetCounterValue(id) {
    if(isBackendConnected(activeIndex)) {
        var index = getFreqSelect();
        var regName = [];
        if(id == "btallCnt") {
            if(confirm(unescape(lng.reset_all_counters[LNG].replace("idx",index)))) {
                regName[0] = "operatingTime";
                regName[1] = "cntPowerUp";
                regName[2] = "cntCrash";  
                regName[3] = "CntOverTempSet"+index;
                regName[4] = "CntShortSet"+index;
                regName[5] = "CntOverLoadSet"+index;
                regName[6] = "CntOpenLoadSet"+index;
                regName[7] = "CntOverVoltageSet"+index;
                regName[8] = "CntNoFrqSet"+index;
                regName[9] = "tempMaxPcbSet"+index;
                regName[10] = "tempMaxQ1Set"+index;
                regName[11] = "tempMaxQ2Set"+index;
                regName[12] = "tempMaxQ3Set"+index;
                regName[13] = "tempMaxQ4Set"+index;
            }
        }
        else {
            if(id == "btoperatingTime" || id == "btcntPowerUp" || id == "btcntCrash") {
                regName[0] = id.substring(2);
            }
            else if(id == "bttempMaxPcbSet") {
                regName[0] = "tempMaxPcbSet"+index;
                regName[1] = "tempMaxQ1Set"+index;
                regName[2] = "tempMaxQ2Set"+index;
                regName[3] = "tempMaxQ3Set"+index;
                regName[4] = "tempMaxQ4Set"+index;
            }
            else {
                regName[0] = id.substring(2) + index;
            }           
        }
        for(var i=0;i<regName.length;i++) {
            if(regName[i] != "") {
                write_register(regName[i],0);  
            }
        }
        commitGenerator = true;
        commitGeneratorSettings = true;
    }

}


function writeNavMenu(level) {
    level = check_access(level);
    userLevel = level;
    document.write("<div class='navbar'>");

    if(userLevel == "USER") {
        document.write("<a href='login.html'>" + lng.login[LNG] + "</a>");
    }
    else  {
        document.write("<div class='subnav'>");
        if(userLevel == "ENG") {
            document.write("<button class='subnavbtn'>" + lng.engineer[LNG] + " <i class='fa fa-caret-down'></i></button>");
        }
        else if(userLevel == "US-ENG") {
            document.write("<button class='subnavbtn'>" + lng.us_engineer[LNG] + " <i class='fa fa-caret-down'></i></button>");
        }
        document.write("<div class='subnav-content'>");
        document.write("<a href='javascript:setLogout();'>" + lng.logout[LNG] + "</a>");
        if(userLevel == "US-ENG") {
            document.write("<a href='password_us-eng.html'>" + lng.password_change[LNG] + "</a>");
        }
        document.write("</div>");
        document.write("</div>");
    }


    if(userLevel == "ENG") {
        document.write("<a href='monitor_eng.html'>"+lng.monitor[LNG]+"</a>");
    }
    else if(userLevel == "US-ENG"){
        document.write("<a href='monitor_us-eng.html'>"+lng.monitor[LNG]+"</a>");
    }
    else {
        document.write("<a href='monitor.html'>"+lng.monitor[LNG]+"</a>");
    }

    document.write("<div class='subnav'>");
        document.write("<button class='subnavbtn'>"+lng.language[LNG]+" <i class='fa fa-caret-down'></i></button>");
        document.write("<div class='subnav-content'>");
            document.write("<a href='javascript:changeLanguage(1)'>Deutsch</a>");
            document.write("<a href='javascript:changeLanguage(0)'>English</a>");
        document.write("</div>");
    document.write("</div>");

    if(userLevel == "ENG") {
        document.write("<a href='info_eng.html'>"+lng.info[LNG]+"</a>");
    }
    else if(userLevel == "US-ENG"){
        document.write("<a href='info_us-eng.html'>"+lng.info[LNG]+"</a>");
    }
    else {
        document.write("<a href='info.html'>"+lng.info[LNG]+"</a>");
    }

    document.write("<a href='javascript:screenShot();'>"+lng.screenshot[LNG]+"</a>");
    document.write("<img src='"+b64_logo+"' id='idHeaderLogo'><a id='idHeaderLogoGradient'>&nbsp;</a>");
    document.write("</div>");
}

function setLogin(level) {
    update_modbus_register();
    if(document.getElementById("loginLevel").value == "ENG") {
        check_account_settings("ENG","monitor_eng.html");
    }
    if(document.getElementById("loginLevel").value == "US-ENG") {
        check_account_settings("US-ENG","monitor_us-eng.html");
    }
}

function setLogout() {
    localStorage.setItem('ubus_session', false);
    localStorage.setItem('userLevelLogged', "USER");
    window.location.href = "index.html";
}

function setNewPassword() {
    write_account_settings();
    window.location.href = "index.html";
}

function writePasswordSettings(level, init) {
    level = check_access(level);
    if(level == "US-ENG" && init == "init") {
        document.write("<div id='loginDialog'>");
        document.write("<div class='popup'>");
        document.write("<div class='content'>");
		document.write("<p id='loginMessage'>"+lng.msg_password_change[LNG]+"</p>");
		document.write("<label for='loginUser1'>"+lng.engineer[LNG]+":</label><br/>");
		document.write("<input type='text' name='loginPassword1' id='loginPassword1' value=''><br/>");
		document.write("<label for='loginUser1'>"+lng.us_engineer[LNG]+":</label><br/>");
		document.write("<input type='text' name='loginPassword2' id='loginPassword2' value=''><br/>");
		document.write("<button type='button' id='loginCheckNewPasswordButton' onclick='setNewPassword()'>"+lng.change[LNG]+"</button>");
        document.write("</div></div></div>");
        read_account_settings();
    }
}

function readVersion() {
    var jsonquery = {"coreregs":{ "cmd": "list", "refresh":true }};
    var uc = ubusCall("kksdcmd", "-V", jsonquery, 10000, true).done(function(response) {
        var text = response;
        console.log(text);
    }); 
}

function read_account_settings() {

    var jsonquery = {"path":"/flash/kks-pass-eng"};
    var uc = ubusCall("file", "read", jsonquery, 10000, true).done(function(response) {
        document.getElementById("loginPassword1").value = atob(response.data);
    }); 
    var jsonquery = {"path":"/flash/kks-pass-us-eng"};
    var uc = ubusCall("file", "read", jsonquery, 10000, true).done(function(response) {
        document.getElementById("loginPassword2").value = atob(response.data);
    }); 
}

function write_account_settings() {

    var jsonquery = {"path":"/flash/kks-pass-eng", "data": btoa(document.getElementById("loginPassword1").value.toString())};
    var uc = ubusCall("file", "write", jsonquery, 10000, true).done(function(response) {
        console.log(response);
    }); 
    var jsonquery = {"path":"/flash/kks-pass-us-eng", "data": btoa(document.getElementById("loginPassword2").value.toString())};
    var uc = ubusCall("file", "write", jsonquery, 10000, true).done(function(response) {
        console.log(response);
    }); 
}

function check_account_settings(level, nextURL) {
    if(level == "ENG") {
        var jsonquery = {"path":"/flash/kks-pass-eng"};
        var uc = ubusCall("file", "read", jsonquery, 10000, true).done(function(response) {
            if(document.getElementById("loginPassword").value == atob(response.data)) {
                window.location.href = nextURL;
                localStorage.setItem('userLevelLogged', "ENG");
            }
        }); 
    }
    if(level == "US-ENG") {
        var jsonquery = {"path":"/flash/kks-pass-us-eng"};
        var uc = ubusCall("file", "read", jsonquery, 10000, true).done(function(response) {
            if(document.getElementById("loginPassword").value == atob(response.data)) {
                window.location.href = nextURL;
                localStorage.setItem('userLevelLogged', "US-ENG");
            }
        }); 
    }
}

function check_access(level) {
    if(level != userLevelLogged) {
        level = "USER";
    }
    return level;
}

function writeMonitorTable(level,init) {
    var tableHeader = ["#", lng.us_short[LNG], lng.power[LNG], lng.set_power_short[LNG], lng.degas[LNG], lng.frequency[LNG], lng.status[LNG]];
    var tableIds = ["monIndex", "monUS", "monActPower", "monSetPower", "monDegas", "monFreq", "monStatus"];
    var maxRow = MAX_GENERATORS + 1;
    var maxCol = tableIds.length;

    level = check_access(level);

    if(level == "ENG" || level == "US-ENG") {
        maxCol = 8;
    }

    if(init == "init") {
        document.write("<h3 class='contentHeader'><span>" + lng.overview[LNG] + "</span></h3>");
        document.write("<table id='idMonTable' class='monTable'>");
        document.write("<tbody>");
        for(var row=0;row<maxRow;row++) {
            document.write("<tr>");
            for(var col=0;col<maxCol;col++) {
                if(row == 0) {
                    if(col == 7) {
                        document.write("<td></td>");
                    }
                    else {
                        document.write("<td class='monTableHeader'>"+tableHeader[col]+"</td>");
                    }
                }
                else {
                    if(col == 7) {
                        document.write("<td class='engParam' onclick='updateExtMonitorInfo("+(row-1)+")'><i class='fa fa-plus-square' aria-hidden='true'></i></td>");
                    }
                    else {
                        document.write("<td id='"+tableIds[col]+(row-1)+"'></td>");
                    }
                }
            }
            document.write("</tr>");
        }
        document.write("</tbody></table>");
    }
    else {
        for(var index=0;index<MAX_GENERATORS;index++) {
            var id = 0;
            if(isBackendConnected(index) && generatorComOK[index] ) {
                id = tableIds[0]+index; 
                addHTML(id,"CM "+(index+1).toString());
                status0 = getMBregister(index,"status0").value;
                id = tableIds[1] + index;
                if(status0 & (1 << 0)) {        // usPower
                    addHTML(id,lng.on[LNG]);
                    document.getElementById(id).className = "statusON";
                }
                else {
                    addHTML(id,lng.off[LNG]);
                    document.getElementById(id).className = "statusOFF";
                }
                addHTML(tableIds[2] + index,getMBregister(index,"actualPower").formatted.trim());
                addHTML(tableIds[3] + index,getMBregister(index,"targetPower").formatted.trim());
                id = tableIds[4] + index;
                if(status0 & (1 << 7)) {        // degas
                    addHTML(id,lng.on[LNG]);
                    document.getElementById(id).className = "statusON";
                }
                else {
                    addHTML(id,lng.off[LNG]);
                    document.getElementById(id).className = "statusOFF";
                }
                var freq = (status0 >> 1) & 0x7;
                addHTML(tableIds[5] + index,freq);

                var warningNumber = getMBregister(index,"warning").value;
                var errorNumber = getMBregister(index,"error").value;
                id = tableIds[6] + index;
                if(errorNumber) {
                    addHTML(id,lng.error[LNG] + " " + errorNumber);
                    document.getElementById(id).className = "statusERROR";
                }
                else if(warningNumber){
                    addHTML(id,lng.warning[LNG] + " " + warningNumber);
                    document.getElementById(id).className = "statusERROR";
                }
                else {
                    addHTML(id,"");
                    document.getElementById(id).className = "statusOFF";
                }

            }
            else {
                id = tableIds[0]+index; 
                addHTML(id,"CM "+(index+1).toString());
                
                for(var i=1;i<maxCol-1;i++) {
                    id = tableIds[i] + index;
                    document.getElementById(id).className = "statusOFF";
                    addHTML(id,"-");
                }              
            }

        }

    }
    
}

function writeLMparameter(level,init) {

    level = check_access(level);
    if(level == "ENG" || level == "US-ENG") {
        
        var tableContent = [
            ["label",lng.setting_number[LNG],         "",       "1", "2","3", "4"],
            ["checkbox",lng.active[LNG],              "idCBsetActive",      "0", "0", "0", "0"],
            ["text",lng.set_power_short[LNG],         "powerRangeSet",      "0", "0","0", "0"],
            ["text",lng.set_power_short[LNG],         "powerSet",      "0", "0","0", "0"],
            ["text",lng.freq_min[LNG],                "frqMinSet",     "0", "0","0", "0"],
            ["text",lng.freq_max[LNG],                "frqMaxSet",     "0", "0", "0","0"],
            ["text",lng.phase_set[LNG],               "phaseSet",  "0", "0", "0","0"],
            ["text",lng.wob_shap_set[LNG],            "frqSweepShapeSet",       "0", "0", "0","0"],
            ["text",lng.wob_freq_set[LNG],            "frqSweepModFrqSet",     "0", "0","0", "0"],
            ["text",lng.wob_ampl_set[LNG],            "frqSweepRangeSet",     "0", "0","0", "0"],
            ["checkbox",lng.freq_sweep[LNG],          "configSet",         "5", "5", "5", "5"],
            ["checkbox",lng.ampl_sweep[LNG],          "configSet",         "6", "6", "6", "6"],
            ["checkbox",lng.serial_resonance[LNG],    "configSet",         "3", "3", "3", "3"],
            ["checkbox",lng.phase_optimizing[LNG],    "configSet",         "1", "1", "1", "1"],
            ["checkbox",lng.freq_regulation_short[LNG],"configSet",         "2", "2", "2", "2"],

        ]

        var maxRow = 6;
        var maxCol = 7;
        if(level == "US-ENG") {
            maxRow = 15;
        }
        if(init == "init") {
            document.write("<div id='idLMparameter' class='LMparameter'>");

            document.write("<h3 class='contentHeader'><span id='paramActiveName'>" + lng.parameter[LNG] + "</span></h3>");

            document.write("<table class='paramTable'>");
            document.write("<tbody>");
            for(var row=0;row<maxRow;row++) {
                document.write("<tr>");
                var colType = tableContent[row][0];
                for(var col=1;col<maxCol;col++) {
                    if(col >= 3) {
                        if(colType == "label") {
                            document.write("<td>");
                            document.write("<label class='LMparam'>"+tableContent[row][col]+"</label>");
                        }
                        if(colType == "text") {
                            document.write("<td>");
                            var elemID = "";
                            if(tableContent[row][2] != "") {
                                elemID = "id='"+tableContent[row][2]+(col - 3).toString()+"'";
                            }
                            document.write("<input type='text' "+elemID + " class='LMparam' value="+tableContent[row][col]+" onblur='limitParameter()'></input>");
                        }
                        if(colType == "checkbox") {
                            document.write("<td>");
                            if(tableContent[row][col] != "") {
                                if(tableContent[row][2] == "idCBsetActive") {
                                    document.write("<input type='checkbox' id='"+tableContent[row][2] +(col - 3).toString() + "' class='LMparamCheckbox' onchange='updateConfigSet(this.id)'></input>");
                                }
                                else {
                                    if(tableContent[row][2] != "") {
                                        var bit =tableContent[row][col];
                                        document.write("<input type='checkbox' id='"+tableContent[row][2] +(col - 3).toString() + bit.toString() +"' class='LMparamCheckbox'></input>");
                                    }
                                }
                            }
                        }
                    }
                    else {
                        document.write("<td>");
                        if(col == 2 && tableContent[row][2] != "") {
                            document.write("<span id='unit_"+tableContent[row][2]+"'></span>");
                        }
                        else {
                            document.write(tableContent[row][col]);  
                        }
                    }
                    document.write("</td>");
                }
                document.write("</tr>");
            }
            if(level == "US-ENG") {
                document.write("<tr><td colspan='2'>"+lng.degas_cycle_time[LNG] +"</td><td><input type='text' id='par_DegasCycleTime'  class='LMparam' value='0'></input></td><td></td><td></td></tr>");
                document.write("<tr><td colspan='2'>"+lng.degas_time[LNG] +"</td><td><input type='text' id='par_DegasTime'  class='LMparam' value='0'></input></td><td></td><td></td></tr>");
                document.write("<tr><td colspan='2'>"+lng.degas_cycle_count[LNG] +"</td><td><input type='text' id='par_DegasCycleCount'  class='LMparam' value='0'></input></td><td></td><td></td></tr>");
                
                document.write("<tr><td colspan='2'>"+lng.voltage_meas_range[LNG] +"</td>");
                document.write("<td><select id='iduRangeSet' class=paramSelect><option value=0>33V</option><option value=1>95V</option><option value=2>390V</option><option value=3>450V</option></select></td><td></td><td></td></tr>");
                document.write("<tr><td colspan='2'>"+lng.current_meas_range[LNG] +"</td>");
                document.write("<td><select id='idiRangeSet' class=paramSelect><option value=0>10A</option><option value=1>20A</option><option value=2>30A</option><option value=3>40A</option></select></td><td></td><td></td></tr>");
            }   

            document.write("</tbody></table>");
            document.write("</div>");
            document.getElementById("idLMparameter").style.display = "none"; 


        }
        else {
            if(isBackendConnected(activeIndex)) {

                if(indexChanged) {
                    for(var i=0;i<4;i++) {
                        document.getElementById("idCBsetActive"+i).disabled = false;
                        if(parameterCheckboxLast & (1 << i)){
                            document.getElementById("idCBsetActive"+i).checked = true; 
                        }
                    }
                }
                
                if(refreshAlldone || parameterInit == false) {
                    parameterInit = true;
                    var nbCheckbox = 0;
                    parameterCheckboxLast = 0;
                    for(var i=0;i<4;i++) {
                        document.getElementById("idCBsetActive"+i).disabled = false; 
                        if(getMBregister(activeIndex,"configSet"+(i+1)).value & (1 << activeConfigBIT)) {
                            document.getElementById("idCBsetActive"+i).checked = true; 
                            nbCheckbox++;
                            parameterCheckboxLast |= (1 << i);
                        }
                        else {
                            document.getElementById("idCBsetActive"+i).checked = false; 
                        }
                    }
                    if(nbCheckbox == 0) {
                        document.getElementById("idCBsetActive0").checked = true; 
                        parameterCheckboxLast = 1;
                    }
                    for(var row=0;row<maxRow;row++) {
                        var colType = tableContent[row][0];
                        for(var i=0;i<4;i++) {
                            if(colType == "text" && tableContent[row][2] != "") {
                                var id = tableContent[row][2]+i;
                                var regName = tableContent[row][2] + (i+1);
                                document.getElementById(id).value  = getMBregister(activeIndex,regName).value;

                                if(i == 0) {
                                    addHTML("unit_" + tableContent[row][2],"["+getMBregister(activeIndex,regName).symbol+"]"); 
                                }
                            }

                            if(colType == "checkbox" && tableContent[row][2] != "idCBsetActive" && tableContent[row][2] != "") {
                                var bit = parseInt(tableContent[row][3+i]);
                                var id = tableContent[row][2]+i.toString()+bit.toString();
                                var regName = tableContent[row][2] + (i+1);
                                var regValue = getMBregister(activeIndex,regName).value;
                                if(regValue & (1 << bit)) {
                                    document.getElementById(id).checked = true; 
                                }
                                else {
                                    document.getElementById(id).checked = false; 
                                }
                            }

                        }
                    }  
                    if(level == "US-ENG") {
                        document.getElementById("par_DegasCycleTime").value = getMBregister(activeIndex,"degasCycleTime").value;
                        document.getElementById("par_DegasTime").value = getMBregister(activeIndex,"degasTime").value;
                        document.getElementById("par_DegasCycleCount").value = getMBregister(activeIndex,"degasCycleCount").value;
                        
                        fwOptions = getMBregister(activeIndex,"fwOptions").value;
                        document.getElementById("iduRangeSet").value = fwOptions & 0x03;
                        document.getElementById("idiRangeSet").value = (fwOptions >> 2) & 0x03;
                    }
                }
                if(level == "US-ENG") {
                    document.getElementById("par_DegasCycleTime").disabled = false;
                    document.getElementById("par_DegasTime").disabled = false;
                    document.getElementById("par_DegasCycleCount").disabled = false;
                    document.getElementById("iduRangeSet").disabled = false;
                    document.getElementById("idiRangeSet").disabled = false;
                }
            }
            else {
                for(var i=0;i<4;i++) {
                    document.getElementById("idCBsetActive"+i).checked = false; 
                    document.getElementById("idCBsetActive"+i).disabled = true;
                }
                if(level == "US-ENG") {
                    document.getElementById("par_DegasCycleTime").disabled = true;
                    document.getElementById("par_DegasTime").disabled = true;
                    document.getElementById("par_DegasCycleCount").disabled = true;
                    document.getElementById("iduRangeSet").disabled = true;
                    document.getElementById("idiRangeSet").disabled = true;
                }
            }
        }

        for(var row=0;row<maxRow;row++) {
            var colType = tableContent[row][0];
            for(var i=0;i<4;i++) {
                id = "idCBsetActive"+i;
                var setEnabled = false;
                if(document.getElementById(id)) {
                    if(document.getElementById(id).checked) {
                        setEnabled = true;
                    }
                }

                if(colType == "text") {
                    id = tableContent[row][2]+i;
                    if(document.getElementById(id)) {
                        document.getElementById(id).disabled = !setEnabled;
                    }
                    
                }
                if(colType == "checkbox" && tableContent[row][2] != "idCBsetActive" && tableContent[row][2] != "") {
                    var bit = parseInt(tableContent[row][3+i]);
                    var id = tableContent[row][2]+i.toString()+bit.toString();
                    if(document.getElementById(id)) {
                        document.getElementById(id).disabled = !setEnabled;
                    }

                }
            } 

        }
    }

}


function limitParameter() {
    
    if(isBackendConnected(activeIndex)) {
        if(userLevel == "ENG" || userLevel == "US-ENG") {
            var arrID = ["powerRangeSet","powerSet", "frqMinSet","frqMaxSet","phaseSet","frqSweepShapeSet","frqSweepModFrqSet","frqSweepRangeSet"];

            for(var i=0;i<4;i++) {
                for(var k=0;k<arrID.length;k++) {
                    checkParameterLimit(arrID[k]+(i),arrID[k]+(i+1));
                }

                var id = "frqMinSet"+i;
                if(document.getElementById(id).disabled == false) {
                    var min = document.getElementById("frqMinSet"+i).value;
                    var max = document.getElementById("frqMaxSet"+i).value;
                    if(min > max) {
                        document.getElementById("frqMinSet"+i).value = max;
                    }
                }
            }
        }
    }

}

function checkParameterLimit(id,regname) {
    var min = getMBregister(activeIndex,regname).min;
    var max = getMBregister(activeIndex,regname).max;
    if(document.getElementById(id)) {
        var value = document.getElementById(id).value;
        if(value < min) {
            document.getElementById(id).value = min;
        }
        if(value > max) {
            document.getElementById(id).value = max;
        }
    }

}

function screenShot() {
    var element = document.getElementById('monitorBody');
    var d = new Date();
    var strTime = d.getFullYear() + "_" + pad(d.getMonth(),2) + "_" + pad(d.getDay(),2) + "_" + pad(d.getHours(),2) + "_" + pad(d.getMinutes(),2) + "_" + pad(d.getSeconds(),2);

    var opt = {
        margin:       1,
        filename:     strTime+'.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        enableLinks:  false,
        jsPDF:        { unit: 'mm', format: 'a2', orientation: 'landscape' }
      };

    if(element) {
        var worker = html2pdf().set(opt).from(element).save();
    }

}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}


function updateExtMonitorInfo(index) {
    var symbol_min = "<i class='fa fa-minus-square' aria-hidden='true'></i>";
    var symbol_max = "<i class='fa fa-plus-square' aria-hidden='true'></i>";
    var eLMparam = document.getElementById("idLMparameter");
    var eExtMoni = document.getElementById("idExtMonitor");
    var eCntOver = document.getElementById("idCounterOverview");

    if(activeIndex == index) {          // extended info already shown
        if (eLMparam.style.display === "none") {
            eLMparam.style.display = "block";
            eExtMoni.style.display = "block";
            eCntOver.style.display = "block";
        }
        else {
            eLMparam.style.display = "none";
            eExtMoni.style.display = "none";
            eCntOver.style.display = "none";
        }
    }
    else {
        document.getElementById('paramActiveName').innerHTML = lng.parameter[LNG] + " CM"+(index+1).toString();
        document.getElementById('extMonitorActiveName').innerHTML = lng.settings[LNG] + " CM"+(index+1).toString();
        document.getElementById('idCounterOverviewName').innerHTML = lng.counter[LNG] + " CM"+(index+1).toString() + " - " + getFreqSelect().toString();
        eLMparam.style.display = "block";
        eExtMoni.style.display = "block";
        eCntOver.style.display = "block";
    }
    if(index != activeIndex) {
        indexChanged = true;
    }
    activeIndex = index;

    for(var i=0;i<16;i++) {
        var symbol = document.getElementById('idMonTable').rows[i+1].cells.item(7);
        if(i==index && eLMparam.style.display == "block") {
            symbol.innerHTML = symbol_min;
        }
        else {
            symbol.innerHTML = symbol_max;
        }
    }


}

function writeMonitorExtended(level,init) {

    level = check_access(level);
    if(level == "ENG" || level == "US-ENG") {

        if(init == "init") {
            document.write("<div id='idExtMonitor' class='extMonitor'>");
            document.write("<h3 class='contentHeader'><span id='extMonitorActiveName'>"+lng.settings[LNG] +"</span></h3>");
            document.write("<table id='idExtMonTable' style='width:100%'><colgroup><col style='width:33%'><col style='width:33%'><col style='width:33%'></colgroup><tbody>");
            document.write("<tr><td>");
                extMonitorPower(init);
                extMonitorFrequency(init);
            document.write("</td><td>");
                extMonitorGeneratorInfo(init);
                extMonitorElectricalData(init);
                if(level == "US-ENG") {
                    extMonitorTemperatures(init);
                }
            document.write("</td><td>");
                extMonitorStatusConfig(init,level);
            document.write("</td></tr></tbody></table>");
            document.write("</div>");
            document.getElementById("idExtMonitor").style.display = "none";
        }
        else {
            extMonitorPower(init);
            extMonitorFrequency(init);
            extMonitorGeneratorInfo(init);
            extMonitorElectricalData(init);
            extMonitorStatusConfig(init,level);
            if(level == "US-ENG") {
                extMonitorTemperatures(init);
            }
        }
    }
}

function extMonitorPower(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.power[LNG] +"</span></h4>");
        document.write("<table style='width:100%'><colgroup><col style='width:80%'><col style='width:20%'></colgroup><tbody>");

        document.write("<tr><td><label>"+lng.actual_power[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValueActPower' style='width:0%'</div></div></td><td><span id='idPGBarActPower'></span></td></tr>");

        document.write("<tr><td><label>"+lng.set_power[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValueSetPower'style='width:0%'</div></div></td><td><span id='idPGBarSetPower'></span></td></tr>");

        document.write("<tr><td><label>"+lng.pulse_width_power_stage[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValuePulseWidthPowerStage' style='width:0%'</div></div></td><td><span id='idPGBarPulseWidthPowerStage'></span></td></tr>");

        document.write("<tr><td><label>"+lng.actual_power[LNG] +"</label></td><td></td><td></td></tr>");
        document.write("<tr><td><div class='progbarContainer'><div class='progbarValue' id='idPGBarValueActPowerPercent' style='width:0%'</div></div></td><td><span id='idPGBarActPowerPercent'></span></td></tr>");

        document.write("</tbody></table>")
        document.write("<div style='width:400px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            addHTML("idPGBarActPower", getMBregister(activeIndex,"powerP").formatted.trim());
            var actPowerW = getMBregister(activeIndex,"powerP").value;
            var maxPowerW = getMBregister(activeIndex,"powerRange").value;
            var actPowerPercent = 0;
            if(maxPowerW != 0) {
                actPowerPercent =  actPowerW / maxPowerW * 100;
            }
            setProgBarValue("idPGBarValueActPower",actPowerPercent);

            addHTML("idPGBarSetPower", getMBregister(activeIndex,"targetPower").formatted.trim());
            setProgBarValue("idPGBarValueSetPower",getMBregister(activeIndex,"targetPower").value);
            
            addHTML("idPGBarPulseWidthPowerStage", getMBregister(activeIndex,"pulsWidthPowerState").formatted.trim());
            setProgBarValue("idPGBarValuePulseWidthPowerStage",getMBregister(activeIndex,"pulsWidthPowerState").value);

            addHTML("idPGBarActPowerPercent", getMBregister(activeIndex,"actualPower").formatted.trim());
            setProgBarValue("idPGBarValueActPowerPercent",getMBregister(activeIndex,"actualPower").value);
        }
        else {
            addHTML("idPGBarActPower", "-"); setProgBarValue("idPGBarValueActPower",0);
            addHTML("idPGBarSetPower", "-"); setProgBarValue("idPGBarValueSetPower",0);
            addHTML("idPGBarPulseWidthPowerStage", "-"); setProgBarValue("idPGBarValuePulseWidthPowerStage",0);
            addHTML("idPGBarActPowerPercent", "-"); setProgBarValue("idPGBarValueActPowerPercent",0);
        }

    }


}

function extMonitorFrequency(init) {
    if(init == "init")  {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.frequency[LNG] +"</span></h4>");
        document.write("<table id='extMonFreqTable' style='width:100%'><colgroup><col style='width:33%'><col style='width:33%'><col style='width:33%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.set_min[LNG] +"</td><td>"+lng.actual[LNG] +"</td><td>"+lng.set_max[LNG] +"</td></tr>");
        document.write("<tr><td><span id='idFreqSetMin'>-</span></td><td><span id='idActFreq'>-</span></td><td><span id='idFreqSetMax'>-</span></td></tr>");
        document.write("</tbody></table>")
        document.write("<div class='slidecontainer'><input type='range' disabled min='0' max='0' value='0' class='slider' id='sliderFreq' oninput="+"changeSliderValue(this.id,'idActFreq',false)"+"></div>");
        document.write("<div style='width:400px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            var elem = document.getElementById("sliderFreq");
            if(elem) {
                elem.min = getMBregister(activeIndex,"frqMin").value;
                elem.max = getMBregister(activeIndex,"frqMax").value;  
                elem.value = getMBregister(activeIndex,"actualFrequency").value;                 
                changeSliderValue('sliderFreq','idActFreq',false); 
                addHTML("idFreqSetMin", elem.min); 
                addHTML("idFreqSetMax", elem.max); 
            }
        }
        else {
            var elem = document.getElementById("sliderFreq");
            if(elem) {
                elem.min = 0;
                elem.max = 0;
                elem.value = 0;
                addHTML("idFreqSetMin", '-'); 
                addHTML("idFreqSetMax", '-'); 
                addHTML("idActFreq", '-'); 
                
            }
        }
    }
}

function extMonitorStatusConfig(init,level) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.status[LNG] +" / "+lng.config[LNG] +"</span></h4>");
        document.write("<table id='extMonStatusConfigTable' style='width:100%'><colgroup><col style='width:70%'><col style='width:30%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.us_power[LNG] +"</td><td><input id='btStatusConfig_USpower' type='button' class='btOFF' value='"+lng.stop[LNG] +"' onclick="+"changeButtonState(this.id,'"+lng.start[LNG] +"','"+lng.stop[LNG] +"')"+"></input></td></tr>");
        document.write("<tr><td>"+lng.frequency[LNG] +"</td>");
        document.write("<td><input id='btFrq0' type='button' class='btBitOFF' value='1' onclick="+"changeBitState(this.id)"+"></input>");
        document.write("<input id='btFrq1' type='button' class='btBitOFF' value='2' onclick="+"changeBitState(this.id)"+"></input>");
        document.write("<input id='btFrq2' type='button' class='btBitOFF' value='3' onclick="+"changeBitState(this.id)"+"></input>");
        document.write("<input id='btFrq3' type='button' class='btBitOFF' value='4' onclick="+"changeBitState(this.id)"+"></input></td></tr>");

        document.write("<tr><td>"+lng.degas[LNG] +"</td><td><input id='btStatusConfig_Degas' type='button' class='btOFF' value='"+lng.off[LNG] +"' onclick="+"changeButtonState(this.id,'"+lng.on[LNG] +"','"+lng.off[LNG] +"')"+"></input></td></tr>");
         document.write("<tr><td>"+lng.degas_cycle_time[LNG] +"</td><td><span id='idDegasCycleTime'>-</span></td></tr>");
        document.write("<tr><td>"+lng.degas_time[LNG] +"</td><td><span id='idDegasTime'>-</span></td></tr>");
        document.write("<tr><td>"+lng.degas_cycle_count[LNG] +"</td><td><span id='idDegasCycleCount'>-</span></td></tr>");

        document.write("<tr><td>"+lng.freq_sweep[LNG] +"</td><td><span id='idFreqSweep'>-</span></td></tr>");
        document.write("<tr><td>"+lng.ampl_sweep[LNG] +"</td><td><span id='idAmplSweep'>-</span></td></tr>");
        document.write("<tr><td>"+lng.resonance[LNG] +"</td><td><span id='idResonance'>-</span></td></tr>");
        document.write("<tr><td>"+lng.phase_optimizing_long[LNG] +"</td><td><span id='idPhaseOptimization'>-</span></td></tr>");
        document.write("<tr><td>"+lng.freq_regulation[LNG] +"</td><td><span id='idFreqRegulation'>-</span></td></tr>");
        document.write("<tr><td>"+lng.op_state[LNG] +"</td><td><span id='idOPstate'>-</span></td></tr>");
        document.write("<tr><td>"+lng.settling_status[LNG] +"</td><td><span id='idSettling'>-</span></td></tr>");

        if(level == "US-ENG") {
            document.write("<tr><td>"+lng.save_operation_point[LNG] +"</td><td><input id='btSaveOperationPoint' type='button' class='btOFF' value='"+lng.off[LNG] +"' onclick="+"changeButtonState(this.id,'"+lng.on[LNG] +"','"+lng.off[LNG] +"')"+"></input></td></tr>");
            document.write("<tr><td>"+lng.interface[LNG] +"</td>");
            document.write("<td><select id='idComSelect' class=paramSelect><option value=0>AUTO</option><option value=1>DCM</option><option value=2>RMT</option><option value=3>ON_OFF</option></select></tr>");
        }

        document.write("<tr><td><input id='btReadGenerator' type='button' class='btnCounterReset' onclick='read_generator()' value='"+lng.read[LNG]+"'></input>&nbsp;<input id='btResetGenerator' type='button' class='btnCounterReset' onclick='reset_generator()' value='"+lng.reset[LNG]+"'></input></td><td><input id='btSaveGenerator' type='button' class='btnCounterReset' onclick='save_generator_all()' value='"+lng.save[LNG]+"'></input></td></tr>");
        
        document.write("</tbody></table>")
        document.write("<div style='width:300px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        var control0 = 0;
        var status0 = 0;
        var status1 = 0;
        var configSet = 0;
        var fwOptions = 0;
        if(isBackendConnected(activeIndex)) {
            control0 = getMBregister(activeIndex,"control0").value;
            status0 = getMBregister(activeIndex,"status0").value;

            if(refreshAlldone) {
                if(setButtonState("btStatusConfig_USpower",control0 & (1 << 0),lng.start[LNG],lng.stop[LNG])) {
                    //markingChanges[activeIndex] = 1; //state has changed
                }
                if(setButtonState("btStatusConfig_Degas",control0 & (1 << 7),lng.on[LNG],lng.off[LNG])) {
                    //markingChanges[activeIndex] = 1; //state has changed
                }
            }

            if(indexChanged) {
         
                if(level == "US-ENG") {
                    setButtonState("btSaveOperationPoint",fwOptions & (1 << 4),lng.on[LNG],lng.off[LNG]);
                    document.getElementById("idComSelect").value = (fwOptions >> 6) & 0x03; 
                }

            }

            addHTML("idDegasCycleTime",getMBregister(activeIndex,"degasCycleTime").value);
            addHTML("idDegasTime",getMBregister(activeIndex,"degasTime").value);
            addHTML("idDegasCycleCount",getMBregister(activeIndex,"degasCycleCount").value);
            
            if(status0 & (1 << 5)) { addHTML("idFreqSweep", lng.on[LNG]); } else { addHTML("idFreqSweep", lng.off[LNG]);}
            if(status0 & (1 << 6)) { addHTML("idAmplSweep", lng.on[LNG]); } else { addHTML("idAmplSweep", lng.off[LNG]);}      
            if(status1 & (1 << 0)) { addHTML("idOPstate", lng.run[LNG]); } else { addHTML("idOPstate", lng.ready[LNG]);}     
            if(status1 & (1 << 1)) { addHTML("idSettling", lng.active[LNG]); } else { addHTML("idSettling", lng.inactive[LNG]);}     
    
            configSet = getMBregister(activeIndex,"configSet" + getFreqSelect().toString()).value;
            if(configSet & (1 << 3)) { addHTML("idResonance", lng.serial[LNG]); } else { addHTML("idResonance", lng.parallel[LNG]);}  
            if(configSet & (1 << 1)) { addHTML("idPhaseOptimization", lng.on[LNG]); } else { addHTML("idPhaseOptimization", lng.off[LNG]);}
            if(configSet & (1 << 2)) { addHTML("idFreqRegulation", lng.on[LNG]); } else { addHTML("idFreqRegulation", lng.off[LNG]);}

            document.getElementById("btStatusConfig_USpower").disabled = false;
            document.getElementById("btStatusConfig_Degas").disabled = false;
            document.getElementById("btReadGenerator").disabled = false;
            document.getElementById("btSaveGenerator").disabled = false;

            updateFreqSelection();

            if(level == "US-ENG") {
                document.getElementById("btSaveOperationPoint").disabled = false;
                document.getElementById("idComSelect").disabled = false;
            }

        }
        else {
            addHTML("idDegasCycleTime", "-");
            addHTML("idDegasTime", "-");  
            addHTML("idDegasCycleCount", "-"); 
            addHTML("idFreqSweep", "-");
            addHTML("idAmplSweep", "-");  
            addHTML("idResonance", "-");  
            addHTML("idPhaseOptimization", "-");  
            addHTML("idFreqRegulation", "-");  
            addHTML("idOPstate", "-");  
            addHTML("idSettling", "-");  
            
            document.getElementById("btStatusConfig_USpower").disabled = true;
            document.getElementById("btStatusConfig_Degas").disabled = true;
            for(var i=0;i<4;i++) {
                document.getElementById("btFrq"+i).disabled = true; 
                setBitState("btFrq"+i,0);

            }
            document.getElementById("btReadGenerator").disabled = true;
            document.getElementById("btSaveGenerator").disabled = true;

            if(level == "US-ENG") {
                document.getElementById("btSaveOperationPoint").disabled = true;
                document.getElementById("idComSelect").disabled = true;
            }

        }        
    }
}

function updateFreqSelection() {
    var nbFreq = 0;
    for(var i=0;i<4;i++) {
        if(document.getElementById("idCBsetActive"+i).checked) {
            document.getElementById("btFrq"+i).disabled = false;
        }
        else {
            setBitState("btFrq"+i, 0);
            document.getElementById("btFrq"+i).disabled = true;
        }
    }
    for(var i=0;i<4;i++) {
        if(isBitState("btFrq"+i)) {
            nbFreq++;
        }
    }
    if(nbFreq == 0){
        var status0 = getMBregister(activeIndex,"status0").value;
        setFreqSelect((status0 >> 1) & 0x3);
    }


}

function extMonitorGeneratorInfo(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.generator_info[LNG] +"</span></h4>");
        document.write("<table id='extMonGenInfoTable' style='width:100%'><colgroup><col style='width:25%'><col style='width:75%'></colgroup><tbody>");

        document.write("<tr><td>SN Core</td><td><span id='serialNumberCore'></span></td></tr>");
        document.write("<tr><td>Config</td><td><span id='configVers'></span></td></tr>");
        document.write("<tr><td>HW Core</td><td><span id='hwVers'></span></td></tr>");
        document.write("<tr><td>SW MCU</td><td><span id='coreMCUVers'></span></td></tr>");
        document.write("<tr><td>SW FPGA</td><td><span id='coreFPGAVers'></span></td></tr>");
        document.write("<tr><td>SW DCM</td><td><span id='dcmVers'></span></td></tr>");
        
        document.write("<tr><td><span id='idInfoErrorTitle'>"+lng.error[LNG] +"</td><td><span id='idInfoError'></span></td></tr>");
        document.write("<tr><td colspan='2'><span id='idInfoErrorText'></span></td></tr>"); 
        document.write("</tbody></table>");
        document.write("<div style='width:350px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {

            addHTML("serialNumberCore", getMBregister(activeIndex,"serNr").formatted.trim());
            addHTML("configVers", getVersionString(activeIndex,"ConfigVers","ConfigVersPatch"));
            addHTML("hwVers", getVersionString(activeIndex,"hwVers","hwVersPatch"));
            addHTML("coreMCUVers", getVersionString(activeIndex,"swVersMcu","swVersPatchMcu"));
            addHTML("coreFPGAVers", getVersionString(activeIndex,"swVersFpga","swVersPatchFpga"));
            if(add_infos[activeIndex].swVersion) {
                addHTML("dcmVers", add_infos[activeIndex].swVersion); 
            }
            else {
                addHTML("dcmVers", "-"); 
            }

            var warningNumber = getMBregister(activeIndex,"warning").value;
            var warningText = "";
            switch(warningNumber) {
                case 0: warningText += lng.error_0[LNG]; break;
                case 1: warningText += lng.error_1[LNG]; break;
                case 2: warningText += lng.error_2[LNG]; break;
                case 3: warningText += lng.error_3[LNG]; break;
                case 4: warningText += lng.error_4[LNG]; break;
                case 5: warningText += lng.error_5[LNG]; break;
                case 6: warningText += lng.error_6[LNG]; break;
                case 7: warningText += lng.error_7[LNG]; break;
                case 8: warningText += lng.error_8[LNG]; break;
                case 9: warningText += lng.error_9[LNG]; break;

                default: warningText += lng.not_defined[LNG]; break;
            }
            var errorNumber = getMBregister(activeIndex,"error").value;
            var errorText = "";
            switch(errorNumber) {
                case 0: errorText += lng.error_0[LNG]; break;
                case 1: errorText += lng.error_1[LNG]; break;
                case 2: errorText += lng.error_2[LNG]; break;
                case 3: errorText += lng.error_3[LNG]; break;
                case 4: errorText += lng.error_4[LNG]; break;
                case 5: errorText += lng.error_5[LNG]; break;
                case 6: errorText += lng.error_6[LNG]; break;
                case 7: errorText += lng.error_7[LNG]; break;
                case 8: errorText += lng.error_8[LNG]; break;
                case 9: errorText += lng.error_9[LNG]; break;
                
                case 100: errorText += lng.error_100[LNG]; break;
                case 101: errorText += lng.error_101[LNG]; break;
                case 102: errorText += lng.error_102[LNG]; break;
                
                case 252: errorText += lng.error_252[LNG]; break;
                case 253: errorText += lng.error_253[LNG]; break;
                case 254: errorText += lng.error_254[LNG]; break;
                case 255: errorText += lng.error_255[LNG]; break;

                default: errorText += lng.not_defined[LNG]; break;
            }
            if(errorNumber) {
                addHTML("idInfoErrorTitle", lng.error[LNG]);
                addHTML("idInfoError", "#"+errorNumber);
                addHTML("idInfoErrorText", errorText);
            }
            else if(warningNumber){
                addHTML("idInfoErrorTitle", lng.warning[LNG]);
                addHTML("idInfoError", "#"+warningNumber);
                addHTML("idInfoErrorText", warningText);
            }
            else {
                addHTML("idInfoErrorTitle", lng.error[LNG]);
                addHTML("idInfoError", "");
                addHTML("idInfoErrorText", "&nbsp;");
            }
            
        }
        else {
            addHTML("serialNumberCore", "-");
            addHTML("configVers", "-");
            addHTML("hwVers", "-");
            addHTML("coreMCUVers", "-");
            addHTML("coreFPGAVers", "-");
            addHTML("dcmVers", "-");
            addHTML("idInfoError", "-");
            addHTML("idInfoErrorText", "-");
        }
    }
}

function extMonitorElectricalData(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.electrical_data[LNG] +"</span></h4>");
        document.write("<table id='extMonElecDataTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:40%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.hf_current[LNG] +"</td><td><span id='idHFcurrent'></span></td></tr>");
        document.write("<tr><td>"+lng.voltage_power_stage[LNG] +"</td><td><span id='idVoltPwrStage'></span></td></tr>");
        document.write("<tr><td>"+lng.power[LNG] +" P</td><td><span id='idPowerP'></span></td></tr>");
        document.write("<tr><td>"+lng.power[LNG] +" S</td><td><span id='idPowerS'></span></td></tr>");
        document.write("<tr><td>"+lng.actual_phase[LNG] +"</td><td><span id='idActPhase'></span></td></tr>");
        document.write("</tbody></table>")
        document.write("<div style='width:350px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            addHTML("idHFcurrent", getMBregister(activeIndex,"current").formatted.trim());
            addHTML("idVoltPwrStage", getMBregister(activeIndex,"voltagePowerStage").formatted.trim());
            addHTML("idPowerP", getMBregister(activeIndex,"powerP").formatted.trim());
            addHTML("idPowerS", getMBregister(activeIndex,"powerS").formatted.trim());
            addHTML("idActPhase", getMBregister(activeIndex,"actualPhase").formatted.trim());
        }
        else {
            addHTML("idHFcurrent", "-");
            addHTML("idVoltPwrStage", "-");
            addHTML("idPowerP", "-");
            addHTML("idPowerS", "-");
            addHTML("idActPhase", "-");
        }
    }
}

function extMonitorTemperatures(init) {
    if(init == "init") {
        document.write("<div class='extMonitorContent'>");
        document.write("<h4 class='contentHeader'><span>"+lng.temperatures[LNG] +"</span></h4>");
        document.write("<table id='extMonTemperatureTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:40%'></colgroup><tbody>");
        document.write("<tr><td>"+lng.pcb[LNG] +"</td><td><span id='idTempPCB'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q1</td><td><span id='idTempQ1'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q2</td><td><span id='idTempQ2'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q3</td><td><span id='idTempQ3'></span></td></tr>");
        document.write("<tr><td>"+lng.power_stage[LNG] +" Q4</td><td><span id='idTempQ4'></span></td></tr>");
        document.write("<tr><td>"+lng.fan[LNG] +"</td><td><span id='idFan'></span></td></tr>");
        document.write("</tbody></table>")
        document.write("<div style='width:350px;height:0px'></div>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(activeIndex)) {
            addHTML("idTempPCB", getMBregister(activeIndex,"temperaturPcb").formatted.trim());
            addHTML("idTempQ1", getMBregister(activeIndex,"temperaturQ1").formatted.trim());
            addHTML("idTempQ2", getMBregister(activeIndex,"temperaturQ2").formatted.trim());
            addHTML("idTempQ3", getMBregister(activeIndex,"temperaturQ3").formatted.trim());
            addHTML("idTempQ4", getMBregister(activeIndex,"temperaturQ4").formatted.trim());
            var fanActive = parseInt(getMBregister(activeIndex,"status0").value) & (1 << 6);
            if(fanActive) {
                addHTML("idFan", lng.on[LNG]);
            }
            else {
                addHTML("idFan", lng.off[LNG]);
            }
        }
        else {
            addHTML("idTempPCB", "-");
            addHTML("idTempQ1", "-");
            addHTML("idTempQ2", "-");
            addHTML("idTempQ3", "-");
            addHTML("idTempQ4", "-");
            addHTML("idFan", "-");
        }
    }
}

function extMonitorConfiguration() {
    /*
    document.write("<div class='extMonitorContent'>");
    document.write("<h4 class='contentHeader'><span>Configuration</span></h4>");
    document.write("<div style='width:400px;height:200px'></div>");
    document.write("</div>");
    */
}

function changeSliderValue(id,tarID,forceUpdate) {
    var elem = document.getElementById(id);
    var tar = document.getElementById(tarID);
    if(elem && tar) {
        if(tar.innerHTML !== elem.value) {
            tar.innerHTML = elem.value;
            if(isBackendConnected(activeIndex) && forceUpdate) {
                // marking selected generator value has changed if connected only
            }
        }
    }
}

function changeBitState(id) {
    var element = document.getElementById(id);
    if(element) {
        for(var i = 0;i<4;i++) {
            var idx = "btFrq"+i;
            if(isBitState(idx) && id != idx){
                setBitState(idx,0);
            }
        }
        //if(element.classList.contains("btBitON")) {
        //    element.className = "btBitOFF";
        //}
        //else 
        if(element.classList.contains("btBitOFF")) {
            element.className = "btBitON";
        }
        if(isBackendConnected(activeIndex)) {
            // marking selected generator value has changed if connected only
            if(id == "btFrq0" || id == "btFrq1" || id == "btFrq2" || id == "btFrq3") {
                markingChanges[activeIndex] = 1;
            }
        }

    }

    


}

function changeButtonState(id,strON,strOFF) {
    var element = document.getElementById(id);
    if(element) {
        if(element.value === strON) {
            element.value = strOFF;
            element.className = "btOFF";
        }
        else if(element.value === strOFF) {
            element.value = strON;
            element.className = "btON";
        }
        if(isBackendConnected(activeIndex)) {
            // marking selected generator value has changed if connected only
            if(id == "btStatusConfig_USpower" || id == "btStatusConfig_Degas") {
                markingChanges[activeIndex] = 1;
            }
        }
    }
}

function setButtonState(id,value,strON,strOFF) {
    var element = document.getElementById(id);
    if(element) {
        if(element.value === strON && value) {
            return 0;       // already correct set
        }
        else if(element.value === strOFF && !value) {
            return 0;       // already correct cleared
        }
        else {
            if(value) {
                element.value = strON;
                element.className = "btON";
            }
            else {
                element.value = strOFF;
                element.className = "btOFF";
            }
            return 1;       // changed
        }
    }
}

function setBitState(id,value) {
    var element = document.getElementById(id);
    if(element) {
        if(element.classList.contains("btBitON") && value) {    
            return 0;       // already correct set
        }
        else if(element.classList.contains("btBitOFF") && !value) {
            return 0;       // already correct cleared
        }
        else {
            if(value) {
                element.className = "btBitON";
            }
            else {
                element.className = "btBitOFF";
            }
            return 1;       // changed
        }
    }
}

function writeCounterOverview(level,init) {
    level = check_access(level);
    if(level == "ENG" || level == "US-ENG") {

        var tableContent = [
            [lng.operation_time[LNG],               "operatingTime",    "x"],
            ["",                                    "",                 ""],
            [lng.overtemperature[LNG],              "CntOverTempSet",    "x"],
            [lng.short_circuits[LNG],               "CntShortSet",   "x"],
            [lng.overload[LNG],                     "CntOverLoadSet",   "x"],
            [lng.idle_running[LNG],                 "CntOpenLoadSet",   "x"],
            [lng.overvoltage_shutdown[LNG],         "CntOverVoltageSet",    "x"],
            [lng.no_freq_point_found[LNG],          "CntNoFrqSet",    "x"],
            [lng.number_power_ups[LNG],             "cntPowerUp",  "x"],
            [lng.number_crashes[LNG],               "cntCrash",    "x"],
            [lng.max_cooling_temperature[LNG],      "tempMaxPcbSet",   "x"],
            ["",                                    "",     ""],
            [lng.reset[LNG],                        "allCnt",     lng.all[LNG]],
        ];

        if(level == "ENG") {
            tableContent[0][2] = "";
        }
        
        if(init == "init") {
            document.write("<div id='idCounterOverview' class='counterOverview'>");
            document.write("<h3 class='contentHeader'><span id='idCounterOverviewName'>" + lng.counter[LNG] + "</span></h3>");

            document.write("<table id='counterTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:30%'><col style='width:10%'></colgroup><tbody>");
            for(var i=0;i<tableContent.length;i++) {
                if(tableContent[i][1] != "") {
                   document.write("<tr><td>"+tableContent[i][0]+"</td><td><span id='"+tableContent[i][1]+"'></span></td>"); 
                }
                else {
                    document.write("<tr><td></td><td></td>"); 
                }
                
                if(tableContent[i][2] !="") {
                    document.write("<td><input type='button' class='btnCounterReset' id='bt"+tableContent[i][1]+"' onclick='resetCounterValue(this.id)' value="+tableContent[i][2]+"></input></td></tr>");
                }
                else {
                    document.write("<td>&nbsp;</td></tr>");
                }

            }
            document.write("</tbody></table>")
            document.write("</div>");
            document.getElementById("idCounterOverview").style.display = "none";
        }
        else {
            if(isBackendConnected(activeIndex)) {
                document.getElementById('idCounterOverviewName').innerHTML = lng.counter[LNG] + " CM"+(activeIndex+1).toString() + " - " + getFreqSelect().toString();
                var index = getFreqSelect();
                addHTML("operatingTime", getMBregister(activeIndex,"operatingTime").formatted.trim());

                addHTML("CntOverTempSet", getMBregister(activeIndex,"CntOverTempSet"+index).formatted.trim());
                addHTML("CntShortSet", getMBregister(activeIndex,"CntShortSet"+index).formatted.trim());
                addHTML("CntOverLoadSet", getMBregister(activeIndex,"CntOverLoadSet"+index).formatted.trim());
                addHTML("CntOpenLoadSet", getMBregister(activeIndex,"CntOpenLoadSet"+index).formatted.trim());
                addHTML("CntOverVoltageSet", getMBregister(activeIndex,"CntOverVoltageSet"+index).formatted.trim());
                addHTML("CntNoFrqSet", getMBregister(activeIndex,"CntNoFrqSet"+index).formatted.trim());

                addHTML("cntPowerUp", getMBregister(activeIndex,"cntPowerUp").formatted.trim());
                addHTML("cntCrash", getMBregister(activeIndex,"cntCrash").formatted.trim());
                var temperature = getMBregister(activeIndex,"tempMaxPcbSet"+index).value;
                var temp_unit = getMBregister(activeIndex,"tempMaxPcbSet"+index).symbol;
                for(var i=0;i<4;i++) {
                    var actTemp = getMBregister(activeIndex,"tempMaxQ"+(i+1).toString() + "Set"+index).value;
                    if(actTemp > temperature) {
                        temperature = actTemp;
                    }
                }
                addHTML("tempMaxPcbSet",temperature.toFixed(1) + " " + temp_unit);            
            }
            else {
                addHTML("operatingTime","-");   
                addHTML("CntOverTempSet","-");   
                addHTML("CntShortSet","-");   
                addHTML("CntOverLoadSet","-");   
                addHTML("CntOpenLoadSet","-");   
                addHTML("CntOverVoltageSet","-");   
                addHTML("CntNoFrqSet","-");   
                addHTML("cntPowerUp","-");   
                addHTML("cntCrash","-");   
                addHTML("tempMaxPcbSet","-");   
            }

        }
    }
}

function writeCommunicationOverview(level) {
    document.write("<div class='communicationOverview'>");
    document.write("<h3 class='contentHeader'><span>" + lng.communication_settings[LNG] + "</span></h3>");
    document.write("<table id='communicationTable' style='width:100%'><colgroup><col style='width:60%'><col style='width:30%'><col style='width:10%'></colgroup><tbody>");
    document.write("<tr><td>" + lng.ip_address[LNG] + "</td><td><input type='text' class='comNetworkSettings' value=192.168.0></td><td>.101</td></tr>");
    document.write("<tr><td>" + lng.mask[LNG] + "</td><td><input type='text' class='comNetworkSettings' value=255.255.255></td><td>.0</td></tr>");
    document.write("<tr><td>" + lng.gateway[LNG] + "</td><td><input type='text' class='comNetworkSettings' value=192.168.0.1></td><td></td></tr>");
    document.write("<tr><td></td><td></td><td><input type='button' class='btnCounterReset' value='"+lng.save[LNG]+"'></input></td></tr>");
    document.write("</tbody></table>")
    document.write("</div>");
}

function writeSWUpdateOverview(level) {
    if(level == "US-ENG") {
        document.write("<div class='swUpdateOverview'>");
        document.write("<h3 class='contentHeader'><span>"+lng.software_update[LNG]+"</span></h3>");
        document.write("<table id='swupdateTable' style='width:100%'><colgroup><col style='width:30%'><col style='width:60%'><col style='width:10%'></colgroup><tbody>");
        document.write("<tr><td>DCM</td><td><input type='file' class='swupdateSettings'></td><td><input type='button' class='btnCounterReset' value='"+lng.start[LNG]+"'></td></tr>");
        document.write("<tr><td>CORE</td><td><input type='file' class='swupdateSettings'></td><td><input type='button' class='btnCounterReset' value='"+lng.start[LNG]+"'></td></tr>");
        document.write("</tbody></table>")
        document.write("</div>");
    }
}

function writeInfo(init) {
    var id;
    var genIndex = 0;
    if(init == "init") {
        document.write("<div class='infoOverview'>");
        document.write("<h3 class='contentHeader'><span>"+lng.information[LNG]+"</span></h3>");
        document.write("<br>DCM V1.1.0</br>");
        document.write("<br>Config <span id='configVers'></span></br>");
        document.write("<br>Hardware <span id='hwVers'></span></br>");
        document.write("<br>CORE MCU <span id='coreMCUVers'></span></br>");
        document.write("<br>CORE FPGA <span id='coreFPGAVers'></span></br>");
        document.write("<br>CORE Bootloader MCU <span id='coreBLMCUVers'></span></br>");
        document.write("<br>CORE Bootloader FPGA <span id='coreBLFPGAVers'></span></br>");

        document.write("<br>Test <span id='testval'></span></br>");

        document.write("<br></br>");
        document.write("<br>"+lng.msg_manu_info[LNG]+"</br>");
        document.write("</div>");
    }
    else {
        if(isBackendConnected(genIndex)) {
            addHTML("configVers", getVersionString(genIndex,"ConfigVers","ConfigVersPatch"));
            addHTML("hwVers", getVersionString(genIndex,"hwVers","hwVersPatch"));
            addHTML("coreMCUVers", getVersionString(genIndex,"swVersMcu","swVersPatchMcu"));
            addHTML("coreFPGAVers", getVersionString(genIndex,"swVersFpga","swVersPatchFpga"));
            addHTML("coreBLMCUVers", getVersionString(genIndex,"blVersMcu","blVersPatchMcu"));
            addHTML("coreBLFPGAVers", getVersionString(genIndex,"blVersFpga","blVersPatchFpga"));
            addHTML("testval", testValue);

            
            //document.getElementById(id).innerHTML = getMBregister(genIndex,"temperaturQ1").formatted.trim();
 
        }
    }

}

function getFreqSelect() {
    var ret = 1;
    for(var i=0;i<4;i++) {
        if(isBitState("btFrq"+i)) {
            ret = i+1;
            break;
        }
    }
    return ret;
}

function setFreqSelect(index) {
    for(var i=0;i<4;i++) {
        var idx = "btFrq"+i;
        if(i == index - 1) {
           setBitState(idx,1); 
        }
        else {
            setBitState(idx,0); 
        }
    }
    
}

function updateConfigSet(id) {
    var number_of_checkboxes = 0;
    for(var i=0;i<4;i++) {
        if(document.getElementById("idCBsetActive"+i).checked) {
            number_of_checkboxes++;
        }
    }
    if(number_of_checkboxes == 0) {
        document.getElementById(id).checked = true;
    }
    writeLMparameter(userLevel,"parDisable");
}

function isBackendConnected(genIndex) {
    if(generatorEnabled[genIndex]) {        // modbus registers
        if(mb_response[genIndex].length > 0) {
            return 1;
        }
    }
    return 0;
}

function getMBregister(genIndex,name) {
    if(generatorEnabled[genIndex]) {        // modbus registers
       return mb_response[genIndex].find(({regname}) => regname === name);
    }
    return 0;
}

function getVersionString(genIndex,major_minor, patch) {
    var ver_major,ver_minor,ver_patch;
    ver_major = parseInt(getMBregister(genIndex,major_minor).formatted.trim() / 256);
    ver_minor = parseInt(getMBregister(genIndex,major_minor).formatted.trim() % 256);
    ver_patch = parseInt(getMBregister(genIndex,patch).formatted.trim());
    return "V "+ver_major+"."+ver_minor+"."+ver_patch;
}

function addHTML(id,text) {
    if(document.getElementById(id)) {
        document.getElementById(id).innerHTML = text; 
    } 
}

function setElemValue(id,value) {
    if(document.getElementById(id)) {
        document.getElementById(id).value = value; 
    } 
}

function setProgBarValue(id,value) {
    var elem = document.getElementById(id);
    if(elem) {
        if(value > 100) {
            value = 100;
        }
        if(value < 0) {
            value = 0;
        }
        elem.style.width = value + "%";
    }
}

function isButtonState(id,text) {
    var elem = document.getElementById(id);
    if(elem) {
        if(elem.value === text) {
            return 1;
        }
    }
    return 0;
}

function isBitState(id) {
    var elem = document.getElementById(id);
    if(elem) {
        if(elem.classList.contains("btBitON")) {
            return 1;
        }
    }
    return 0;
}

const fetchWithTimeout = (url, duration) => {
    return new Promise((resolve, reject) => {
      const controller = new AbortController();
      const signal = controller.signal;
      let timerid = null;
      
      fetch(url, { signal })
        .then((resp) => {
        resp.json().then((e) => {
          clearTimeout(timerid);
          resolve(e);
        }).catch((error) => {
          reject(error);
        })
       })
        .catch((error) => {
        reject(error);
      });
      
      timerid = setTimeout(() => {
        //console.log("Aborted");
        controller.abort();
      }, duration);
      
    })
  }

//*****************************************************************************************************************************
// LANGUAGE SECTION
//*****************************************************************************************************************************
function changeLanguage(languagIndex) {
	LNG = parseInt(languagIndex);
	if(LNG < 0) { LNG = 0;}
	if(LNG > 1) { LNG = 1;}
	localStorage.setItem('languageIndex', LNG);
	location.replace(location.href);
}

var lng = {   					/* ENGLISH                          | DEUTSCH             */
  power: 					    ["Power",							"Leistung"],
  login:						["Login",							"Anmelden"],
  logout:                       ["Logout",                          "Abmelden"],
  password_change:              ["Change password",                 "Passwort &auml;ndern"],
  msg_password_change:          ["Customize the passwords.",        "Passen Sie die Passw&ouml;rter an."],
  communication:				["Communication",			        "Kommunikation"],
  monitor:						["Monitor",						    "Monitor"],
  language:						["Language",					    "Sprache"],
  info:							["Info",							"Info"],
  screenshot:					["Screenshot",				        "Screenshot"],
  engineer:						["Engineer",                        "Engineer"],
  us_engineer:					["US-Engineer",                     "US-Engineer"],
  sw_update:                    ["SW Update",                       "SW Update"],
  msg_set_credentials:          ["Enter user name and password.",   "Geben Sie Benutzername und Passwort ein."],
  username:                     ["User name",                       "Benutzername"],
  password:                     ["Password",                        "Passwort"],
  change:                       ["Change",                          "&Auml;ndern"],
  overview:                     ["Overview",                        "&Uuml;bersicht"],
  parameter:                    ["Parameter",                       "Parameter"],
  settings:                     ["Settings",                        "Einstellungen"],
  counter:                      ["Counter",                         "Z&auml;hler"],
  actual_power:                 ["Actual Power",                    "Aktuelle Leistung"],
  set_power:                    ["Set Power",                       "Eingestellte Leistung"],
  set_power_short:              ["Set Power",                       "Eing. Leistung"],
  pulse_width_power_stage:      ["Pulse width power stage",         "Stellwert Endstufe"],
  frequency:                    ["Frequency",                       "Frequenz"],
  frequency_short:              ["Freq",                            "Freq"],
  set_min:                      ["Set min",                         "Minimal"],
  set_max:                      ["Set max",                         "Maximum"],
  actual:                       ["Actual",                          "Aktuell"],
  status:                       ["Status",                          "Status"],
  config:                       ["Config",                          "Konfiguration"],
  us_power:                     ["US Power",                        "US Leistung"],
  freq_sweep:                   ["Freq Sweep",                      "Freq Sweep"],
  ampl_sweep:                   ["Ampl Sweep",                      "Ampl Sweep"],
  degas:                        ["DEGAS",                           "DEGAS"],
  resonance:                    ["Resonance",                       "Resonanz"],
  phase_optimizing_long:        ["Phase Optimization",              "Phasenoptimierung"],
  freq_regulation:              ["Freq Regulation",                 "Freq Regulation"],
  settling_status:              ["Settling Status",                 "Settling Status"],
  set_power_reached:            ["Set power reached",               "Eing. Leistung erreicht"],
  start:                        ["START",                           "START"],
  stop:                         ["STOP",                            "STOP"],
  disabled:                     ["disabled",                        "deaktiviert"],
  on:                           ["ON",                              "AN"],
  off:                          ["OFF",                             "AUS"],
  yes:                          ["Yes",                             "Ja"], 
  no:                           ["No",                              "Nein"], 
  generator_info:               ["Generator Info",                  "Generator Info"], 
  op_state:                     ["OP State",                        "Betriebszustand"], 
  ready:                        ["ready",                           "ready"], 
  run:                          ["run",                             "run"], 
  settling:                     ["Settling",                        "Einschwingen"], 
  active:                       ["active",                          "aktiv"], 
  inactive:                     ["inactive",                        "inaktiv"], 
  fan:                          ["Fan",                             "L&uuml;fter"],
  warning:                      ["Warning",                         "Warnung"], 
  error:                        ["Error",                           "Fehler"],
  electrical_data:              ["Electrical Data",                 "Elektrische Daten"],
  hf_current:                   ["HF current",                      "HF Strom"],
  voltage_power_stage:          ["Voltage Power Stage",             "Spannung Endstufe"],
  actual_phase:                 ["Actual Phase",                    "Aktuelle Phase"],
  temperatures:                 ["Temperatures",                    "Temperaturen"],
  pcb:                          ["PCB",                             "PCB"],
  power_stage:                  ["Power Stage",                     "Endstufe"],
  setting_number:               ["Setting number",                  "Einstellungsnummer"],
  active:                       ["Active",                          "Aktiv"],
  set_power_short:              ["Set power",                       "Eing. Leistung"],
  freq_min:                     ["Freq min",                        "Freq min"],
  freq_max:                     ["Freq max",                        "Freq max"],
  phase_set:                    ["Phase set",                       "Eing. Phase"],
  wob_shap_set:                 ["Wob Shap Set",                    "Eing. Wob Shap"],
  wob_freq_set:                 ["Wob Freq Set",                    "Eing. Wob Freq"],
  wob_ampl_set:                 ["Wob Ampl. Set",                   "Eing. Wob Ampl."],
  degas_cycle_time:             ["Degas Cycle Time [s]",            "Degas Zykluszeit [s]"],
  degas_time:                   ["Degas Time [s]",                  "Degas Zeit [s]"],
  degas_cycle_count:            ["Degas Cycle Count",               "Degas Zyklusz&auml;hler"],
  phase_optimizing:             ["phOptimisation",                  "phOptimierung"],
  freq_regulation_short:        ["freqRegulation",                  "freqRegulation"],
  serial_resonance:             ["Serial resonance",                "Serieresonanz"],
  operation_time:               ["Operating time",                  "Betriebszeit"],
  overtemperature:              ["Overtemperature",                 "&Uuml;bertemperatur"],
  short_circuits:               ["Short circuits",                  "Kurzschl&uuml;sse"],
  overload:                     ["Overload",                        "&Uuml;berlast"],
  idle_running:                 ["Idle running",                    "Leerlauf"],
  overcurrent_limitation:       ["Overcurrent limitation",          "&Uuml;berstrombegrenzung"],
  overvoltage_shutdown:         ["Overvoltage shutdown",            "&Uuml;berspannungsabschaltung"],
  generator_defective:          ["Generator defective",             "Generator defekt"],
  increased_temperature:        ["Increased temperature",           "Erh&ouml;hte Temperatur"],
  no_freq_point_found:          ["No frequency point found",        "Kein Frequenzpunkt gefunden"],
  number_power_ups:             ["Number of Power-UPs",             "Anzahl Power-UPs"],
  number_crashes:               ["Number of crashes",               "Anzahl Abst&uuml;rze"],
  max_cooling_temperature:      ["MAX cooling temperature",         "MAX-K&uuml;hltemperatur"],
  reset:                        ["Reset",                           "Reset"],
  all:                          ["ALL",                             "ALLE"],
  communication_settings:       ["Communication Settings",          "Kommunikationseinstellungen"],
  ip_address:                   ["IP address",                      "IP Adresse"],
  mask:                         ["Mask",                            "Maske"],
  gateway:                      ["Gateway",                         "Gateway"],
  save:                         ["Save",                            "Speichern"],
  software_update:              ["Software Update",                 "Software Update"],
  information:                  ["Information",                     "Information"],
  msg_manu_info:                ["Additional manufacture information","Zus&auml;tzliche Herstellerinformationen"],
  not_defined:                  ["Not defined",                     "Nicht definiert"],    
  read:                         ["Read",                            "Lesen"],  
  parallel:                     ["parallel",                        "parallel"],
  serial:                       ["serial",                          "serie"],
  reset_all_counters:           ["Delete all counter state from config set idx?","Alle Z%E4hlerst%E4nde aus dem Konfig-Set idx l%F6schen?"],
  us_short:                     ["US",                              "US"],
  com_problem:                  ["DCM communicaton problem",        "DCM Kommunikationsproblem"],
  voltage_meas_range:           ["Voltage measure range",           "Spannungsmessbereich"],
  current_meas_range:           ["Current measure range",           "Strommessbereich"],
  save_operation_point:         ["Save operation point",            "Arbeitspunkt speichern"],
  interface:                    ["COM Interface",                   "Komm. Schnittstelle"],
  
  //----Error text, keep order
  error_0:                      ["no error",                        "kein Fehler"],
  error_1:                      ["Overtemperature",                 "&Uuml;bertemperatur"],
  error_2:                      ["Overvoltage",                     "&Uuml;berspannung"],
  error_3:                      ["Undervoltage",                    "Unterspannung"],
  error_4:                      ["Secondary short circuit",         "Sekund&auml;rer Kurzschluss"],
  error_5:                      ["Excessive apparent current",      "&Uuml;berh&ouml;hter Scheinstrom"],
  error_6:                      ["Idle running",                    "Leerlauf"],
  error_7:                      ["Overload transformer",            "&Uuml;berlast Trafo"],
  error_8:                      ["Overload internal power stage",   "&Uuml;berlast intere Endstufe"],
  error_9:                      ["Overload external power stage",   "&Uuml;berlast externe Endstufe"],
  error_100:                    ["Test not finished",               "Test nicht abgeschlossen"],
  error_101:                    ["Unknown software status",         "Unbekannter Softwarestatus"],
  error_102:                    ["Saving to flash failed",          "Speicherung ins Flash fehlgeschlagen"],
  error_252:                    ["No comm. to ext. EEPROM",         "Keine Komm. zu ext. EEPROM"],
  error_253:                    ["No comm. to FPGA",                "Keine Komm. zu FPGA"],
  error_254:                    ["No comm. to remote display",      "Keine Komm. zu Fernbedienprint"],
  error_255:                    ["No comm. to DCM module",          "Keine Komm. zu DCM Modul"],
  
  
};



//*****************************************************************************************************************************
// SIMULATED DATA
//*****************************************************************************************************************************
var sim_mb_data = {
    "jsonrpc": "2.0",
    "id": 1,
    "result": [
        0,
        {
            "result": [
                {
                    "regidx": 0,
                    "regname": "ConfigVers",
                    "description": "Config-Version (major.minor)",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 0,
                    "rawlen": 2,
                    "modbusreg": 1,
                    "readonly": true,
                    "engval": 1,
                    "value": 1.000000,
                    "formatted": "1 "
                },
                {
                    "regidx": 1,
                    "regname": "ConfigVersPatch",
                    "description": "Config-Version (patch)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 2,
                    "rawlen": 1,
                    "modbusreg": 2,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 2,
                    "regname": "hwVers",
                    "description": "Hardware-Version (major.minor)",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 3,
                    "rawlen": 2,
                    "modbusreg": 3,
                    "readonly": true,
                    "engval": 65535,
                    "value": 65535.000000,
                    "formatted": "65535 "
                },
                {
                    "regidx": 3,
                    "regname": "hwVersPatch",
                    "description": "Hardware-Version (patch)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 5,
                    "rawlen": 1,
                    "modbusreg": 4,
                    "readonly": true,
                    "engval": 255,
                    "value": 255.000000,
                    "formatted": "255 "
                },
                {
                    "regidx": 4,
                    "regname": "swVersMcu",
                    "description": "Software-Version MCU (major.minor)",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 6,
                    "rawlen": 2,
                    "modbusreg": 5,
                    "readonly": true,
                    "engval": 1024,
                    "value": 1024.000000,
                    "formatted": "1024 "
                },
                {
                    "regidx": 5,
                    "regname": "swVersPatchMcu",
                    "description": "Software-Version MCU (patch)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 8,
                    "rawlen": 1,
                    "modbusreg": 6,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 6,
                    "regname": "swVersFpga",
                    "description": "Software-Version FPGA (major.minor)",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 9,
                    "rawlen": 2,
                    "modbusreg": 7,
                    "readonly": true,
                    "engval": 1,
                    "value": 1.000000,
                    "formatted": "1 "
                },
                {
                    "regidx": 7,
                    "regname": "swVersPatchFpga",
                    "description": "Software-Version FPGA (patch)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 11,
                    "rawlen": 1,
                    "modbusreg": 8,
                    "readonly": true,
                    "engval": 1,
                    "value": 1.000000,
                    "formatted": "1 "
                },
                {
                    "regidx": 8,
                    "regname": "blVersMcu",
                    "description": "Bootloader-Version MCU (major.minor)",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 12,
                    "rawlen": 2,
                    "modbusreg": 9,
                    "readonly": true,
                    "engval": 513,
                    "value": 513.000000,
                    "formatted": "513 "
                },
                {
                    "regidx": 9,
                    "regname": "blVersPatchMcu",
                    "description": "Bootloader-Version MCU (patch)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 14,
                    "rawlen": 1,
                    "modbusreg": 10,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 10,
                    "regname": "blVersFpga",
                    "description": "Bootloader-Version FPGA (major.minor)",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 15,
                    "rawlen": 2,
                    "modbusreg": 11,
                    "readonly": true,
                    "engval": 65535,
                    "value": 65535.000000,
                    "formatted": "65535 "
                },
                {
                    "regidx": 11,
                    "regname": "blVersPatchFpga",
                    "description": "Bootloader-Version FPGA (patch)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 17,
                    "rawlen": 1,
                    "modbusreg": 12,
                    "readonly": true,
                    "engval": 255,
                    "value": 255.000000,
                    "formatted": "255 "
                },
                {
                    "regidx": 12,
                    "regname": "modulAddr",
                    "description": "Moduladresse (Drehschalter)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 18,
                    "rawlen": 1,
                    "modbusreg": 13,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 13,
                    "regname": "status0",
                    "description": "Zustand Ultraschallgenerierung",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 19,
                    "rawlen": 1,
                    "modbusreg": 14,
                    "readonly": true,
                    "engval": 34,
                    "value": 34.000000,
                    "formatted": "34 "
                },
                {
                    "regidx": 14,
                    "regname": "status1",
                    "description": "Betriebszustand",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 20,
                    "rawlen": 1,
                    "modbusreg": 15,
                    "readonly": true,
                    "engval": 2,
                    "value": 2.000000,
                    "formatted": "2 "
                },
                {
                    "regidx": 15,
                    "regname": "error",
                    "description": "Anzeige Fehlerabschaltung",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 21,
                    "rawlen": 1,
                    "modbusreg": 16,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 16,
                    "regname": "warning",
                    "description": "Anzeige Warnung",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 22,
                    "rawlen": 1,
                    "modbusreg": 17,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 17,
                    "regname": "actualPower",
                    "description": "Aktuelle Ist-Leistung",
                    "min": 0.000000,
                    "max": 100.000000,
                    "resolution": 1.000000,
                    "unit": "percent",
                    "symbol": "%",
                    "spiaddr": 23,
                    "rawlen": 1,
                    "modbusreg": 18,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 %"
                },
                {
                    "regidx": 18,
                    "regname": "actualFrequency",
                    "description": "Aktuelle Ist-Frequenz",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 24,
                    "rawlen": 2,
                    "modbusreg": 19,
                    "readonly": true,
                    "engval": 264,
                    "value": 26400.000000,
                    "formatted": "26400 Hz"
                },
                {
                    "regidx": 19,
                    "regname": "actualPhase",
                    "description": "Ist-Phasenlage",
                    "min": -90.000000,
                    "max": 90.000000,
                    "resolution": 1.000000,
                    "unit": "degree",
                    "symbol": "°",
                    "spiaddr": 26,
                    "rawlen": 1,
                    "modbusreg": 20,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 °"
                },
                {
                    "regidx": 20,
                    "regname": "temperaturQ1",
                    "description": "Temperatur Schaltelement 1",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 27,
                    "rawlen": 1,
                    "modbusreg": 21,
                    "readonly": true,
                    "engval": 48,
                    "value": 24.000000,
                    "formatted": "24.0 °C"
                },
                {
                    "regidx": 21,
                    "regname": "temperaturQ2",
                    "description": "Temperatur Schaltelement 2",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 28,
                    "rawlen": 1,
                    "modbusreg": 22,
                    "readonly": true,
                    "engval": 51,
                    "value": 25.500000,
                    "formatted": "25.5 °C"
                },
                {
                    "regidx": 22,
                    "regname": "temperaturQ3",
                    "description": "Temperatur Schaltelement 3",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 29,
                    "rawlen": 1,
                    "modbusreg": 23,
                    "readonly": true,
                    "engval": 48,
                    "value": 24.000000,
                    "formatted": "24.0 °C"
                },
                {
                    "regidx": 23,
                    "regname": "temperaturQ4",
                    "description": "Temperatur Schaltelement 4",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 30,
                    "rawlen": 1,
                    "modbusreg": 24,
                    "readonly": true,
                    "engval": 48,
                    "value": 24.000000,
                    "formatted": "24.0 °C"
                },
                {
                    "regidx": 24,
                    "regname": "temperaturPcb",
                    "description": "Gehäuse Innentemperatur",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 31,
                    "rawlen": 1,
                    "modbusreg": 25,
                    "readonly": true,
                    "engval": 69,
                    "value": 34.500000,
                    "formatted": "34.5 °C"
                },
                {
                    "regidx": 25,
                    "regname": "powerP",
                    "description": "Ist-Wirkleistung in Watt",
                    "min": 1.000000,
                    "max": 3000.000000,
                    "resolution": 1.000000,
                    "unit": "watt",
                    "symbol": "W",
                    "spiaddr": 32,
                    "rawlen": 2,
                    "modbusreg": 26,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 W"
                },
                {
                    "regidx": 26,
                    "regname": "powerS",
                    "description": "Ist-Scheinleistung in Watt",
                    "min": 1.000000,
                    "max": 3000.000000,
                    "resolution": 1.000000,
                    "unit": "voltampere",
                    "symbol": "VA",
                    "spiaddr": 34,
                    "rawlen": 2,
                    "modbusreg": 27,
                    "readonly": true,
                    "engval": 135,
                    "value": 135.000000,
                    "formatted": "135 VA"
                },
                {
                    "regidx": 27,
                    "regname": "current",
                    "description": "HF-Strom",
                    "min": 0.000000,
                    "max": 25.500000,
                    "resolution": 0.100000,
                    "unit": "ampere",
                    "symbol": "A",
                    "spiaddr": 36,
                    "rawlen": 1,
                    "modbusreg": 28,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 A"
                },
                {
                    "regidx": 28,
                    "regname": "voltagePowerStage",
                    "description": "Spannung an Endstufe (Mittelwert)",
                    "min": 0.000000,
                    "max": 510.000000,
                    "resolution": 2.000000,
                    "unit": "volt",
                    "symbol": "V",
                    "spiaddr": 37,
                    "rawlen": 1,
                    "modbusreg": 29,
                    "readonly": true,
                    "engval": 2,
                    "value": 4.000000,
                    "formatted": "4 V"
                },
                {
                    "regidx": 29,
                    "regname": "peakVoltagePowerStage",
                    "description": "Spannung an Endstufe (Peak)",
                    "min": 0.000000,
                    "max": 510.000000,
                    "resolution": 2.000000,
                    "unit": "volt",
                    "symbol": "V",
                    "spiaddr": 38,
                    "rawlen": 1,
                    "modbusreg": 30,
                    "readonly": true,
                    "engval": 2,
                    "value": 4.000000,
                    "formatted": "4 V"
                },
                {
                    "regidx": 30,
                    "regname": "pulsWidthPowerState",
                    "description": "Stellwert Endstufe",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "percent",
                    "symbol": "%",
                    "spiaddr": 39,
                    "rawlen": 1,
                    "modbusreg": 31,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 %"
                },
                {
                    "regidx": 31,
                    "regname": "serNr",
                    "description": "Serienummer Gerät",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 40,
                    "rawlen": 2,
                    "modbusreg": 32,
                    "readonly": true,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 32,
                    "regname": "control0",
                    "description": "Kontrollregister",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 50,
                    "rawlen": 1,
                    "modbusreg": 1,
                    "readonly": false,
                    "engval": 34,
                    "value": 34.000000,
                    "formatted": "34 "
                },
                {
                    "regidx": 33,
                    "regname": "control1",
                    "description": "Kontrollregister",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 51,
                    "rawlen": 1,
                    "modbusreg": 2,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 34,
                    "regname": "targetPower",
                    "description": "Sollleistung in %",
                    "min": 10.000000,
                    "max": 100.000000,
                    "resolution": 1.000000,
                    "unit": "percent",
                    "symbol": "%",
                    "spiaddr": 52,
                    "rawlen": 1,
                    "modbusreg": 3,
                    "readonly": false,
                    "engval": 10,
                    "value": 10.000000,
                    "formatted": "10 %"
                },
                {
                    "regidx": 35,
                    "regname": "targetPhase",
                    "description": "Sollphase in °",
                    "min": -90.000000,
                    "max": 90.000000,
                    "resolution": 1.000000,
                    "unit": "degree",
                    "symbol": "°",
                    "spiaddr": 53,
                    "rawlen": 1,
                    "modbusreg": 4,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 °"
                },
                {
                    "regidx": 36,
                    "regname": "frqMin",
                    "description": "Untere Grenze Frequenzband",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 54,
                    "rawlen": 2,
                    "modbusreg": 5,
                    "readonly": false,
                    "engval": 200,
                    "value": 20000.000000,
                    "formatted": "20000 Hz"
                },
                {
                    "regidx": 37,
                    "regname": "frqMax",
                    "description": "Obere Grenze Frequenzband",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 56,
                    "rawlen": 2,
                    "modbusreg": 6,
                    "readonly": false,
                    "engval": 300,
                    "value": 30000.000000,
                    "formatted": "30000 Hz"
                },
                {
                    "regidx": 38,
                    "regname": "powerRange",
                    "description": "Einstellung maximale Leistung",
                    "min": 0.000000,
                    "max": 4000.000000,
                    "resolution": 1.000000,
                    "unit": "watt",
                    "symbol": "W",
                    "spiaddr": 58,
                    "rawlen": 2,
                    "modbusreg": 7,
                    "readonly": false,
                    "engval": 2000,
                    "value": 2000.000000,
                    "formatted": "2000 W"
                },
                {
                    "regidx": 39,
                    "regname": "degasCycleTime",
                    "description": "Degas Zykluszeit",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 60,
                    "rawlen": 1,
                    "modbusreg": 8,
                    "readonly": false,
                    "engval": 10,
                    "value": 10.000000,
                    "formatted": "10 "
                },
                {
                    "regidx": 40,
                    "regname": "degasTime",
                    "description": "Degas Zeit",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 61,
                    "rawlen": 1,
                    "modbusreg": 9,
                    "readonly": false,
                    "engval": 60,
                    "value": 60.000000,
                    "formatted": "60 "
                },
                {
                    "regidx": 41,
                    "regname": "degasCycleCount",
                    "description": "Degas Zykluszähler",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 62,
                    "rawlen": 1,
                    "modbusreg": 10,
                    "readonly": false,
                    "engval": 2,
                    "value": 2.000000,
                    "formatted": "2 "
                },
                {
                    "regidx": 42,
                    "regname": "fwOptions",
                    "description": "Firmware-Optionen",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 63,
                    "rawlen": 2,
                    "modbusreg": 11,
                    "readonly": false,
                    "engval": 47,
                    "value": 47.000000,
                    "formatted": "47 "
                },
                {
                    "regidx": 43,
                    "regname": "customNr",
                    "description": "Kundenserienummer",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 65,
                    "rawlen": 2,
                    "modbusreg": 12,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 44,
                    "regname": "operatingTime",
                    "description": "Betriebsdauer in Minuten",
                    "min": 0.000000,
                    "max": 16777215.000000,
                    "resolution": 1.000000,
                    "unit": "minute",
                    "symbol": "min",
                    "spiaddr": 67,
                    "rawlen": 3,
                    "modbusreg": 13,
                    "readonly": false,
                    "engval": 1197,
                    "value": 1197.000000,
                    "formatted": "1197 min"
                },
                {
                    "regidx": 45,
                    "regname": "cntPowerUp",
                    "description": "Powerup-Zähler",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 70,
                    "rawlen": 2,
                    "modbusreg": 16,
                    "readonly": false,
                    "engval": 3,
                    "value": 3.000000,
                    "formatted": "3 "
                },
                {
                    "regidx": 46,
                    "regname": "cntCrash",
                    "description": "Absturzzähler",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 72,
                    "rawlen": 2,
                    "modbusreg": 17,
                    "readonly": false,
                    "engval": 144,
                    "value": 144.000000,
                    "formatted": "144 "
                },
                {
                    "regidx": 47,
                    "regname": "configSet1",
                    "description": "Konfiguration zu Frequenzband 1",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 115,
                    "rawlen": 2,
                    "modbusreg": 100,
                    "readonly": false,
                    "engval": 168,
                    "value": 168.000000,
                    "formatted": "168 "
                },
                {
                    "regidx": 48,
                    "regname": "frqMinSet1",
                    "description": "Untere Grenze Frequenzband 1",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 117,
                    "rawlen": 2,
                    "modbusreg": 101,
                    "readonly": false,
                    "engval": 200,
                    "value": 20000.000000,
                    "formatted": "20000 Hz"
                },
                {
                    "regidx": 49,
                    "regname": "frqMaxSet1",
                    "description": "Obere Grenze Frequenzband 1",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 119,
                    "rawlen": 2,
                    "modbusreg": 102,
                    "readonly": false,
                    "engval": 300,
                    "value": 30000.000000,
                    "formatted": "30000 Hz"
                },
                {
                    "regidx": 50,
                    "regname": "phaseSet1",
                    "description": "Sollphase in °",
                    "min": -90.000000,
                    "max": 90.000000,
                    "resolution": 1.000000,
                    "unit": "degree",
                    "symbol": "°",
                    "spiaddr": 121,
                    "rawlen": 1,
                    "modbusreg": 103,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 °"
                },
                {
                    "regidx": 51,
                    "regname": "powerSet1",
                    "description": "Startwert Sollleistung in %",
                    "min": 1.000000,
                    "max": 100.000000,
                    "resolution": 1.000000,
                    "unit": "percent",
                    "symbol": "%",
                    "spiaddr": 122,
                    "rawlen": 1,
                    "modbusreg": 104,
                    "readonly": false,
                    "engval": 10,
                    "value": 10.000000,
                    "formatted": "10 %"
                },
                {
                    "regidx": 52,
                    "regname": "powerRangeSet1",
                    "description": "Einstellung maximale Leistung",
                    "min": 0.000000,
                    "max": 4000.000000,
                    "resolution": 1.000000,
                    "unit": "watt",
                    "symbol": "W",
                    "spiaddr": 123,
                    "rawlen": 2,
                    "modbusreg": 105,
                    "readonly": false,
                    "engval": 2000,
                    "value": 2000.000000,
                    "formatted": "2000 W"
                },
                {
                    "regidx": 53,
                    "regname": "frqSweepShapeSet1",
                    "description": "Kurvenform Wobbelung (frqSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 125,
                    "rawlen": 1,
                    "modbusreg": 106,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 54,
                    "regname": "frqSweepModFrqSet1",
                    "description": "Wobbelfrequenz (frqSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 126,
                    "rawlen": 1,
                    "modbusreg": 107,
                    "readonly": false,
                    "engval": 50,
                    "value": 50.000000,
                    "formatted": "50 Hz"
                },
                {
                    "regidx": 55,
                    "regname": "frqSweepRangeSet1",
                    "description": "Wobbelamplitude (frqSweep)",
                    "min": 0.000000,
                    "max": 25500.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 127,
                    "rawlen": 1,
                    "modbusreg": 108,
                    "readonly": false,
                    "engval": 1,
                    "value": 100.000000,
                    "formatted": "100 Hz"
                },
                {
                    "regidx": 56,
                    "regname": "ampSweepShapeSet1",
                    "description": "Kurvenform Wobbelung (ampSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 128,
                    "rawlen": 1,
                    "modbusreg": 109,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 57,
                    "regname": "ampSweepFrqSet1",
                    "description": "Wobbelfrequenz (ampSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 129,
                    "rawlen": 1,
                    "modbusreg": 110,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 Hz"
                },
                {
                    "regidx": 58,
                    "regname": "tempMaxQ1Set1",
                    "description": "max. Temperatur Schaltelement 1",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 130,
                    "rawlen": 1,
                    "modbusreg": 111,
                    "readonly": false,
                    "engval": 50,
                    "value": 25.000000,
                    "formatted": "25.0 °C"
                },
                {
                    "regidx": 59,
                    "regname": "tempMaxQ2Set1",
                    "description": "max. Temperatur Schaltelement 2",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 131,
                    "rawlen": 1,
                    "modbusreg": 112,
                    "readonly": false,
                    "engval": 51,
                    "value": 25.500000,
                    "formatted": "25.5 °C"
                },
                {
                    "regidx": 60,
                    "regname": "tempMaxQ3Set1",
                    "description": "max. Temperatur Schaltelement 3",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 132,
                    "rawlen": 1,
                    "modbusreg": 113,
                    "readonly": false,
                    "engval": 48,
                    "value": 24.000000,
                    "formatted": "24.0 °C"
                },
                {
                    "regidx": 61,
                    "regname": "tempMaxQ4Set1",
                    "description": "max. Temperatur Schaltelement 4",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 133,
                    "rawlen": 1,
                    "modbusreg": 114,
                    "readonly": false,
                    "engval": 48,
                    "value": 24.000000,
                    "formatted": "24.0 °C"
                },
                {
                    "regidx": 62,
                    "regname": "tempMaxPcbSet1",
                    "description": "max. Temperatur PCB",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 134,
                    "rawlen": 1,
                    "modbusreg": 115,
                    "readonly": false,
                    "engval": 69,
                    "value": 34.500000,
                    "formatted": "34.5 °C"
                },
                {
                    "regidx": 63,
                    "regname": "CntShortSet1",
                    "description": "Zähler Kurzschlussabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 135,
                    "rawlen": 2,
                    "modbusreg": 116,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 64,
                    "regname": "CntOverLoadSet1",
                    "description": "Zähler Überlastabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 137,
                    "rawlen": 2,
                    "modbusreg": 117,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 65,
                    "regname": "CntOpenLoadSet1",
                    "description": "Zähler Leerlaufabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 139,
                    "rawlen": 2,
                    "modbusreg": 118,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 66,
                    "regname": "CntOverVoltageSet1",
                    "description": "Zähler Überspannung",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 141,
                    "rawlen": 2,
                    "modbusreg": 119,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 67,
                    "regname": "CntOverTempSet1",
                    "description": "Zähler Übertemperatur",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 143,
                    "rawlen": 2,
                    "modbusreg": 120,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 68,
                    "regname": "CntNoFrqSet1",
                    "description": "Zähler kein Frequenzpunkt",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 145,
                    "rawlen": 2,
                    "modbusreg": 121,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 69,
                    "regname": "configSet2",
                    "description": "Konfiguration zu Frequenzband 2",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 150,
                    "rawlen": 2,
                    "modbusreg": 130,
                    "readonly": false,
                    "engval": 200,
                    "value": 200.000000,
                    "formatted": "200 "
                },
                {
                    "regidx": 70,
                    "regname": "frqMinSet2",
                    "description": "Untere Grenze Frequenzband 2",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 152,
                    "rawlen": 2,
                    "modbusreg": 131,
                    "readonly": false,
                    "engval": 220,
                    "value": 22000.000000,
                    "formatted": "22000 Hz"
                },
                {
                    "regidx": 71,
                    "regname": "frqMaxSet2",
                    "description": "Obere Grenze Frequenzband 2",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 154,
                    "rawlen": 2,
                    "modbusreg": 132,
                    "readonly": false,
                    "engval": 320,
                    "value": 32000.000000,
                    "formatted": "32000 Hz"
                },
                {
                    "regidx": 72,
                    "regname": "phaseSet2",
                    "description": "Sollphase in °",
                    "min": -90.000000,
                    "max": 90.000000,
                    "resolution": 1.000000,
                    "unit": "degree",
                    "symbol": "°",
                    "spiaddr": 156,
                    "rawlen": 1,
                    "modbusreg": 133,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 °"
                },
                {
                    "regidx": 73,
                    "regname": "powerSet2",
                    "description": "Startwert Sollleistung in %",
                    "min": 1.000000,
                    "max": 100.000000,
                    "resolution": 1.000000,
                    "unit": "percent",
                    "symbol": "%",
                    "spiaddr": 157,
                    "rawlen": 1,
                    "modbusreg": 134,
                    "readonly": false,
                    "engval": 30,
                    "value": 30.000000,
                    "formatted": "30 %"
                },
                {
                    "regidx": 74,
                    "regname": "powerRangeSet2",
                    "description": "Einstellung maximale Leistung",
                    "min": 0.000000,
                    "max": 4000.000000,
                    "resolution": 1.000000,
                    "unit": "watt",
                    "symbol": "W",
                    "spiaddr": 158,
                    "rawlen": 2,
                    "modbusreg": 135,
                    "readonly": false,
                    "engval": 1500,
                    "value": 1500.000000,
                    "formatted": "1500 W"
                },
                {
                    "regidx": 75,
                    "regname": "frqSweepShapeSet2",
                    "description": "Kurvenform Wobbelung (frqSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 160,
                    "rawlen": 1,
                    "modbusreg": 136,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 76,
                    "regname": "frqSweepModFrqSet2",
                    "description": "Wobbelfrequenz (frqSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 161,
                    "rawlen": 1,
                    "modbusreg": 137,
                    "readonly": false,
                    "engval": 50,
                    "value": 50.000000,
                    "formatted": "50 Hz"
                },
                {
                    "regidx": 77,
                    "regname": "frqSweepRangeSet2",
                    "description": "Wobbelamplitude (frqSweep)",
                    "min": 0.000000,
                    "max": 25500.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 162,
                    "rawlen": 1,
                    "modbusreg": 138,
                    "readonly": false,
                    "engval": 1,
                    "value": 100.000000,
                    "formatted": "100 Hz"
                },
                {
                    "regidx": 78,
                    "regname": "ampSweepShapeSet2",
                    "description": "Kurvenform Wobbelung (ampSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 163,
                    "rawlen": 1,
                    "modbusreg": 139,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 79,
                    "regname": "ampSweepFrqSet2",
                    "description": "Wobbelfrequenz (ampSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 164,
                    "rawlen": 1,
                    "modbusreg": 140,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 Hz"
                },
                {
                    "regidx": 80,
                    "regname": "tempMaxQ1Set2",
                    "description": "max. Temperatur Schaltelement 1",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 165,
                    "rawlen": 1,
                    "modbusreg": 141,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 81,
                    "regname": "tempMaxQ2Set2",
                    "description": "max. Temperatur Schaltelement 2",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 166,
                    "rawlen": 1,
                    "modbusreg": 142,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 82,
                    "regname": "tempMaxQ3Set2",
                    "description": "max. Temperatur Schaltelement 3",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 167,
                    "rawlen": 1,
                    "modbusreg": 143,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 83,
                    "regname": "tempMaxQ4Set2",
                    "description": "max. Temperatur Schaltelement 4",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 168,
                    "rawlen": 1,
                    "modbusreg": 144,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 84,
                    "regname": "tempMaxPcbSet2",
                    "description": "max. Temperatur PCB",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 169,
                    "rawlen": 1,
                    "modbusreg": 145,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 85,
                    "regname": "CntShortSet2",
                    "description": "Zähler Kurzschlussabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 170,
                    "rawlen": 2,
                    "modbusreg": 146,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 86,
                    "regname": "CntOverLoadSet2",
                    "description": "Zähler Überlastabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 172,
                    "rawlen": 2,
                    "modbusreg": 147,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 87,
                    "regname": "CntOpenLoadSet2",
                    "description": "Zähler Leerlaufabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 174,
                    "rawlen": 2,
                    "modbusreg": 148,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 88,
                    "regname": "CntOverVoltageSet2",
                    "description": "Zähler Überspannung",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 176,
                    "rawlen": 2,
                    "modbusreg": 149,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 89,
                    "regname": "CntOverTempSet2",
                    "description": "Zähler Übertemperatur",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 178,
                    "rawlen": 2,
                    "modbusreg": 150,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 90,
                    "regname": "CntNoFrqSet2",
                    "description": "Zähler kein Frequenzpunkt",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 180,
                    "rawlen": 2,
                    "modbusreg": 151,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 91,
                    "regname": "configSet3",
                    "description": "Konfiguration zu Frequenzband 3",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 185,
                    "rawlen": 2,
                    "modbusreg": 160,
                    "readonly": false,
                    "engval": 160,
                    "value": 160.000000,
                    "formatted": "160 "
                },
                {
                    "regidx": 92,
                    "regname": "frqMinSet3",
                    "description": "Untere Grenze Frequenzband 3",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 187,
                    "rawlen": 2,
                    "modbusreg": 161,
                    "readonly": false,
                    "engval": 250,
                    "value": 25000.000000,
                    "formatted": "25000 Hz"
                },
                {
                    "regidx": 93,
                    "regname": "frqMaxSet3",
                    "description": "Obere Grenze Frequenzband 3",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 189,
                    "rawlen": 2,
                    "modbusreg": 162,
                    "readonly": false,
                    "engval": 350,
                    "value": 35000.000000,
                    "formatted": "35000 Hz"
                },
                {
                    "regidx": 94,
                    "regname": "phaseSet3",
                    "description": "Sollphase in °",
                    "min": -90.000000,
                    "max": 90.000000,
                    "resolution": 1.000000,
                    "unit": "degree",
                    "symbol": "°",
                    "spiaddr": 191,
                    "rawlen": 1,
                    "modbusreg": 163,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 °"
                },
                {
                    "regidx": 95,
                    "regname": "powerSet3",
                    "description": "Startwert Sollleistung in %",
                    "min": 1.000000,
                    "max": 100.000000,
                    "resolution": 1.000000,
                    "unit": "percent",
                    "symbol": "%",
                    "spiaddr": 192,
                    "rawlen": 1,
                    "modbusreg": 164,
                    "readonly": false,
                    "engval": 50,
                    "value": 50.000000,
                    "formatted": "50 %"
                },
                {
                    "regidx": 96,
                    "regname": "powerRangeSet3",
                    "description": "Einstellung maximale Leistung",
                    "min": 0.000000,
                    "max": 4000.000000,
                    "resolution": 1.000000,
                    "unit": "watt",
                    "symbol": "W",
                    "spiaddr": 193,
                    "rawlen": 2,
                    "modbusreg": 165,
                    "readonly": false,
                    "engval": 1000,
                    "value": 1000.000000,
                    "formatted": "1000 W"
                },
                {
                    "regidx": 97,
                    "regname": "frqSweepShapeSet3",
                    "description": "Kurvenform Wobbelung (frqSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 195,
                    "rawlen": 1,
                    "modbusreg": 166,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 98,
                    "regname": "frqSweepModFrqSet3",
                    "description": "Wobbelfrequenz (frqSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 196,
                    "rawlen": 1,
                    "modbusreg": 167,
                    "readonly": false,
                    "engval": 50,
                    "value": 50.000000,
                    "formatted": "50 Hz"
                },
                {
                    "regidx": 99,
                    "regname": "frqSweepRangeSet3",
                    "description": "Wobbelamplitude (frqSweep)",
                    "min": 0.000000,
                    "max": 25500.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 197,
                    "rawlen": 1,
                    "modbusreg": 168,
                    "readonly": false,
                    "engval": 1,
                    "value": 100.000000,
                    "formatted": "100 Hz"
                },
                {
                    "regidx": 100,
                    "regname": "ampSweepShapeSet3",
                    "description": "Kurvenform Wobbelung (ampSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 198,
                    "rawlen": 1,
                    "modbusreg": 169,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 101,
                    "regname": "ampSweepFrqSet3",
                    "description": "Wobbelfrequenz (ampSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 199,
                    "rawlen": 1,
                    "modbusreg": 170,
                    "readonly": false,
                    "engval": 100,
                    "value": 100.000000,
                    "formatted": "100 Hz"
                },
                {
                    "regidx": 102,
                    "regname": "tempMaxQ1Set3",
                    "description": "max. Temperatur Schaltelement 1",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 200,
                    "rawlen": 1,
                    "modbusreg": 171,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 103,
                    "regname": "tempMaxQ2Set3",
                    "description": "max. Temperatur Schaltelement 2",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 201,
                    "rawlen": 1,
                    "modbusreg": 172,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 104,
                    "regname": "tempMaxQ3Set3",
                    "description": "max. Temperatur Schaltelement 3",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 202,
                    "rawlen": 1,
                    "modbusreg": 173,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 105,
                    "regname": "tempMaxQ4Set3",
                    "description": "max. Temperatur Schaltelement 4",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 203,
                    "rawlen": 1,
                    "modbusreg": 174,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 106,
                    "regname": "tempMaxPcbSet3",
                    "description": "max. Temperatur PCB",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 204,
                    "rawlen": 1,
                    "modbusreg": 175,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 107,
                    "regname": "CntShortSet3",
                    "description": "Zähler Kurzschlussabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 205,
                    "rawlen": 2,
                    "modbusreg": 176,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 108,
                    "regname": "CntOverLoadSet3",
                    "description": "Zähler Überlastabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 207,
                    "rawlen": 2,
                    "modbusreg": 177,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 109,
                    "regname": "CntOpenLoadSet3",
                    "description": "Zähler Leerlaufabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 209,
                    "rawlen": 2,
                    "modbusreg": 178,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 110,
                    "regname": "CntOverVoltageSet3",
                    "description": "Zähler Überspannung",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 211,
                    "rawlen": 2,
                    "modbusreg": 179,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 111,
                    "regname": "CntOverTempSet3",
                    "description": "Zähler Übertemperatur",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 213,
                    "rawlen": 2,
                    "modbusreg": 180,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 112,
                    "regname": "CntNoFrqSet3",
                    "description": "Zähler kein Frequenzpunkt",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 215,
                    "rawlen": 2,
                    "modbusreg": 181,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 113,
                    "regname": "configSet4",
                    "description": "Konfiguration zu Frequenzband 4",
                    "min": 0.000000,
                    "max": 65535.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 220,
                    "rawlen": 2,
                    "modbusreg": 190,
                    "readonly": false,
                    "engval": 193,
                    "value": 193.000000,
                    "formatted": "193 "
                },
                {
                    "regidx": 114,
                    "regname": "frqMinSet4",
                    "description": "Untere Grenze Frequenzband 4",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 222,
                    "rawlen": 2,
                    "modbusreg": 191,
                    "readonly": false,
                    "engval": 300,
                    "value": 30000.000000,
                    "formatted": "30000 Hz"
                },
                {
                    "regidx": 115,
                    "regname": "frqMaxSet4",
                    "description": "Obere Grenze Frequenzband 4",
                    "min": 0.000000,
                    "max": 400000.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 224,
                    "rawlen": 2,
                    "modbusreg": 192,
                    "readonly": false,
                    "engval": 400,
                    "value": 40000.000000,
                    "formatted": "40000 Hz"
                },
                {
                    "regidx": 116,
                    "regname": "phaseSet4",
                    "description": "Sollphase in °",
                    "min": -90.000000,
                    "max": 90.000000,
                    "resolution": 1.000000,
                    "unit": "degree",
                    "symbol": "°",
                    "spiaddr": 226,
                    "rawlen": 1,
                    "modbusreg": 193,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 °"
                },
                {
                    "regidx": 117,
                    "regname": "powerSet4",
                    "description": "Startwert Sollleistung in %",
                    "min": 1.000000,
                    "max": 100.000000,
                    "resolution": 1.000000,
                    "unit": "percent",
                    "symbol": "%",
                    "spiaddr": 227,
                    "rawlen": 1,
                    "modbusreg": 194,
                    "readonly": false,
                    "engval": 100,
                    "value": 100.000000,
                    "formatted": "100 %"
                },
                {
                    "regidx": 118,
                    "regname": "powerRangeSet4",
                    "description": "Einstellung maximale Leistung",
                    "min": 0.000000,
                    "max": 4000.000000,
                    "resolution": 1.000000,
                    "unit": "watt",
                    "symbol": "W",
                    "spiaddr": 228,
                    "rawlen": 2,
                    "modbusreg": 195,
                    "readonly": false,
                    "engval": 500,
                    "value": 500.000000,
                    "formatted": "500 W"
                },
                {
                    "regidx": 119,
                    "regname": "frqSweepShapeSet4",
                    "description": "Kurvenform Wobbelung (frqSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 230,
                    "rawlen": 1,
                    "modbusreg": 196,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 120,
                    "regname": "frqSweepModFrqSet4",
                    "description": "Wobbelfrequenz (frqSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 231,
                    "rawlen": 1,
                    "modbusreg": 197,
                    "readonly": false,
                    "engval": 50,
                    "value": 50.000000,
                    "formatted": "50 Hz"
                },
                {
                    "regidx": 121,
                    "regname": "frqSweepRangeSet4",
                    "description": "Wobbelamplitude (frqSweep)",
                    "min": 0.000000,
                    "max": 25500.000000,
                    "resolution": 100.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 232,
                    "rawlen": 1,
                    "modbusreg": 198,
                    "readonly": false,
                    "engval": 1,
                    "value": 100.000000,
                    "formatted": "100 Hz"
                },
                {
                    "regidx": 122,
                    "regname": "ampSweepShapeSet4",
                    "description": "Kurvenform Wobbelung (ampSweep)",
                    "min": 0.000000,
                    "max": 3.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 233,
                    "rawlen": 1,
                    "modbusreg": 199,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 123,
                    "regname": "ampSweepFrqSet4",
                    "description": "Wobbelfrequenz (ampSweep)",
                    "min": 0.000000,
                    "max": 255.000000,
                    "resolution": 1.000000,
                    "unit": "Hertz",
                    "symbol": "Hz",
                    "spiaddr": 234,
                    "rawlen": 1,
                    "modbusreg": 200,
                    "readonly": false,
                    "engval": 100,
                    "value": 100.000000,
                    "formatted": "100 Hz"
                },
                {
                    "regidx": 124,
                    "regname": "tempMaxQ1Set4",
                    "description": "max. Temperatur Schaltelement 1",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 235,
                    "rawlen": 1,
                    "modbusreg": 201,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 125,
                    "regname": "tempMaxQ2Set4",
                    "description": "max. Temperatur Schaltelement 2",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 236,
                    "rawlen": 1,
                    "modbusreg": 202,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 126,
                    "regname": "tempMaxQ3Set4",
                    "description": "max. Temperatur Schaltelement 3",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 237,
                    "rawlen": 1,
                    "modbusreg": 203,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 127,
                    "regname": "tempMaxQ4Set4",
                    "description": "max. Temperatur Schaltelement 4",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 238,
                    "rawlen": 1,
                    "modbusreg": 204,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 128,
                    "regname": "tempMaxPcbSet4",
                    "description": "max. Temperatur PCB",
                    "min": 0.000000,
                    "max": 127.500000,
                    "resolution": 0.500000,
                    "unit": "celsius",
                    "symbol": "°C",
                    "spiaddr": 239,
                    "rawlen": 1,
                    "modbusreg": 205,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0.0 °C"
                },
                {
                    "regidx": 129,
                    "regname": "CntShortSet4",
                    "description": "Zähler Kurzschlussabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 240,
                    "rawlen": 2,
                    "modbusreg": 206,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 130,
                    "regname": "CntOverLoadSet4",
                    "description": "Zähler Überlastabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 242,
                    "rawlen": 2,
                    "modbusreg": 207,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 131,
                    "regname": "CntOpenLoadSet4",
                    "description": "Zähler Leerlaufabschaltungen",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 244,
                    "rawlen": 2,
                    "modbusreg": 208,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 132,
                    "regname": "CntOverVoltageSet4",
                    "description": "Zähler Überspannung",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 246,
                    "rawlen": 2,
                    "modbusreg": 209,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 133,
                    "regname": "CntOverTempSet4",
                    "description": "Zähler Übertemperatur",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 248,
                    "rawlen": 2,
                    "modbusreg": 210,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                },
                {
                    "regidx": 134,
                    "regname": "CntNoFrqSet4",
                    "description": "Zähler kein Frequenzpunkt",
                    "min": 0.000000,
                    "max": 65335.000000,
                    "resolution": 1.000000,
                    "unit": "none",
                    "symbol": "",
                    "spiaddr": 250,
                    "rawlen": 2,
                    "modbusreg": 211,
                    "readonly": false,
                    "engval": 0,
                    "value": 0.000000,
                    "formatted": "0 "
                }
            ]
        }
    ]
};
