import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden
  width: 1152px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 18px;
  pdding-top: 36px;
  width: 750px;
  .banner-img{
    width: 750px;
    height: 324px;
  }
`;

export const HomeRight = styled.div`
  width: 336px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 24px 0 12px 0;
  margin-left: -42px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 38px;
  line-height: 38px;
  margin-left: 42px;
  margin-bottom: 24px;
  pdding-right: 12px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    height: 38px;
    width: 38px;
    margin-right: 12px;
  }
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 24px 0;
  border-bottom: 1px solid #dcdcdc
  .pic {
    display: block;
    width: 150px;
    height: 120px;
    float: right
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 36px 0;
  width: 336px;
`

export const RecommendItem = styled.div`
	width: 336px;
	height: 60px;
  margin-bottom: 10px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 330px;
  border: 1px solid #dcdcdc;
  border-radius: 3.6px;
  height: 360px;
  line-height: 360px;
  text-align: center;
`

export const LoadMore = styled.div`
  width: 100%;
  height: 48px;
  line-height: 40px;
  margin: 36px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 24px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 120px;
  bottom: 120px;
  width: 72px;
  height: 72px;
  line-height: 72px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 17px;
`