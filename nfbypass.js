if (NetFunnel.TS_BYPASS == false){
    NetFunnel.TS_BYPASS = true;

    var macro = setinterval(function() {

        if(NetFunnel.TS_BYPASS == false){
            NetFunnel.TS_BYPASS = true;
        }
    }, 100);
}
