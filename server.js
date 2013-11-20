// http 모듈을 로드
var http = require( "http" );

// http 서버를 생성
http.createServer( function( req, res )
{
    // 컨텐츠 헤더
    res.writeHead( 200, {"content-type": "text/plain"} );
    
    var test = "var test value";

    // 메시지를 쓰고 통신이 완료되었다는 신호를 보냄
    res.end(test);
}).listen( process.env.PORT, process.env.IP );

console.log( "Server running" );